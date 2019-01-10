<template>
  <div class="upload-box">
    <el-upload prop="logo"
               :action="uploadPar.uploadInit"
               class="upload-demo"
               :auto-upload="true"
               :file-list="fileList"
               :before-upload="beforeload"
               :show-file-list="false"
               :accept="pAccept">
      <el-button size="mini"
                 v-if="showUpload"
                 type="primary">{{$t('commonWordsTY.upload')}}
      </el-button>
    </el-upload>

    <div style="display: inline-block;vertical-align: top;"
         v-if="fileUrl !== ''">
      <el-button type="primary"
                 size="mini"
                 v-if="showDownload">
        <a :href="fileUrl"
           download
           style="text-decoration: none;color: white;">{{$t('commonWordsTY.download')}}
        </a>
      </el-button>
    </div>

    <div v-else
         style="line-height: 40px;display: inline-block;vertical-align: top;">
      <el-button type="primary"
                 :disabled="true"
                 v-if="showDownload"
                 size="mini">{{$t('commonWordsTY.download')}}</el-button>
    </div>

    <span style="color: #409EFF;margin-top: 2px;font-size: 12px;display: inline-block;vertical-align: top;cursor: pointer;"
          @click.stop="onViewSupportFormat">{{ $t('commonWordsTY.supportFormat') }}</span>

    <template v-if="ifShowProgress">
      <el-progress :text-inside="true"
                   :stroke-width="14"
                   :percentage="uploadPercent"></el-progress>
      <el-button type="danger"
                 size="mini"
                 @click="ifAbortUpload = true;">{{$t('componentTY.cancelUpload')}}</el-button>
    </template>
  </div>
</template>
<script>
  import { getChunk } from '../../api/api'
  export default {
    data() {
      return {
        fileUrl: '',
        uploadPar: {
          uploadInit: './aetherupload/initialize',//初始化接口
          uploadIng: './aetherupload/uploading',
          fileobj: '',
          chunkData: {
            file_name: '',
            file_size: '',
            group: 'file'
          },
          uploadData: {
            uploadBaseName: '',
            uploadExt: '',
            chunkSize: '',
            chunkCount: '',
            subDir: '',
            i: 0
          }
        },
        fileList: [],
        logo: {
          dialogImageUrl: '',
          dialogVisible: false,
          name: '',
          url: ''
        },
        uploadPercent: 0,
        ifShowProgress: false,
        ifAbortUpload: false
      }
    },
    props: {
      // 文件对象 
      // {
      //   name: string, // 文件名称
      //   path: string  // 文件路径
      // }
      // 或
      // 地址字符串
      //   path: string // 文件路径

      value: [String, Object],
      showUpload: {
        type: Boolean,
        default: true
      },
      showDownload: {
        type: Boolean,
        default: true
      },
      accept: {
        type: Array,
        default: () => ['video/mp4', 'application/octet-stream', 'video/ogg', 'video/webm', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      }
    },
    computed: {
      pAccept() {
        return this.accept.join(', ');
      }
    },

    methods: {
      beforeload: function (file) {
        const fileType = file.type;
        const accept = this.accept || [];
        if (accept.findIndex(item => item === fileType) === -1) {
          this.$message({
            message: '文件格式不正确',
            type: 'warning'
          });
          return;
        }
        this.uploadPar.chunkData.file_name = file.name;
        this.uploadPar.chunkData.file_size = file.size;
        this.uploadPar.fileObj = file;
        let params = this.uploadPar.chunkData;
        var _this = this;
        let user = sessionStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
        }
        let auth = user.token_type + ' ' + user.access_token;
        let headers = { Authorization: auth }
        getChunk(params, headers).then(async data => {
          if (data.error) {
            this.$message({
              message: data.error,
              type: 'error'
            });
            return;
          }
          this.uploadPar.uploadData.subDir = data.subDir;
          this.uploadPar.uploadData.uploadBaseName = data.uploadBaseName;
          this.uploadPar.uploadData.uploadExt = data.uploadExt;
          this.uploadPar.uploadData.chunkSize = data.chunkSize;
          this.uploadPar.uploadData.chunkCount = Math.ceil(file.size / data.chunkSize);
          this.uploadPar.uploadData.i = 0;
          const sleep = (second = 300) => new Promise(resolve => setTimeout(resolve, second));  //默认睡眠300毫秒

          const uploadDoc = (fileobj, data) => {
            if (typeof XMLHttpRequest === 'undefined') {
              return;
            }
            return new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              const formData = new FormData();
              const action = this.uploadPar.uploadIng;
              let start = data.i * data.chunkSize, end = Math.min(fileobj.size, start + data.chunkSize);
              this.currentXhr = xhr;
              formData.append("file", fileobj.slice(start, end));
              formData.append("upload_ext", data.uploadExt);
              formData.append("chunk_total", data.chunkCount);
              formData.append("chunk_index", data.i + 1);
              formData.append("upload_basename", data.uploadBaseName);
              formData.append("group", this.uploadPar.chunkData.group);
              formData.append("sub_dir", data.subDir);
              xhr.onerror = function (XMLHttpRequest) {
                if (XMLHttpRequest.status === 0) {
                  this.$message({
                    message: 'network error',
                    type: 'error'
                  });
                  reject();
                }
              }

              xhr.onload = function () {
                if (xhr.status == 200) {
                  try {  //加这个防止json数据格式不规范，在parse时把错误报给外层
                    const data = JSON.parse(xhr.responseText);
                    if (data.error === 0) {
                      resolve(data);
                    } else {
                      this.$message({
                        message: 'upload error',
                        type: 'error'
                      });
                      reject();
                    }
                  } catch (error) {
                    this.$message({
                      message: 'upload error',
                      type: 'error'
                    });
                    reject();
                  }
                } else if (xhr.status < 200 || xhr.status >= 300) {
                  let res = xhr.response || xhr.responseText;
                  this.$message({
                    message: 'server response error',
                    type: 'error'
                  });
                  reject();
                }
              };

              xhr.open('post', action, true);
              xhr.send(formData);
            });
          };

          this.ifShowProgress = true;
          await sleep(500);    //防止进度条未显示就被卡住

          try {
            for (var c = 0; c < _this.uploadPar.uploadData.chunkCount; c++) {
              if (this.ifAbortUpload) {
                throw new Error();
              }
              const result = await uploadDoc(_this.uploadPar.fileObj, _this.uploadPar.uploadData);
              _this.uploadPar.uploadData.i++;
              const uploadPercent = ((parseInt(_this.uploadPar.uploadData.i) / parseInt(_this.uploadPar.uploadData.chunkCount)) * 100).toFixed(2);
              this.uploadPercent = Number(uploadPercent);
              if (result.savedPath !== '') {
                this.ifShowProgress = false;
                if (typeof _this.value === 'string') {
                  _this.$emit('input', result.savedPath);
                  this.uploadPercent = 0;
                } else if (typeof _this.value === 'object') {
                  const data = { name: _this.uploadPar.chunkData.file_name, path: result.savedPath };
                  _this.$emit('input', data);
                  this.uploadPercent = 0;
                }

                _this.fileUrl = URL.createObjectURL(file);
                _this.$emit('fetchUrlFromObject', this.fileUrl);
                let files = [{
                  status: 'success',
                  name: file.name,
                  url: result.savedPath
                }];
                _this.fileList = files;
              } else {
                await sleep();
              }
            }
          } catch (error) {
            console.log(error);
          }
        });
      },
      onViewSupportFormat() {
        const hintText = `
          <p>${this.$t('commonWordsTY.allowFormat')}</p><br>
          ${this.accept.map(item => `<strong>${item}</strong>`).join('<br>')}
          `
        this.$message({
          type: 'warning',
          message: hintText,
          dangerouslyUseHTMLString: true,
          duration: 0,
          showClose: true
        })
      }
    },
    watch: {
      ifAbortUpload(newVal) {
        if (newVal) {
          this.currentXhr && this.currentXhr.abort();
          this.ifShowProgress = false;
          this.uploadPercent = 0;
        }
      }
    },
    mounted() {
      if (!!this.value) {
        if (typeof this.value === 'object') {
          if (this.value.path) {
            this.fileUrl = './aetherupload/display/' + this.value.path;
          }
        } else if (typeof this.value === 'string') {
          this.fileUrl = './aetherupload/display/' + this.value;
        }
      }

      console.log(this.fileUrl)
    }
  }
</script>
<style lang="scss">
  .upload-box {
    .upload-demo {
      display: inline-table;
      margin-right: 5px;
    }
  }
</style>