import { LitElement, html, css } from "lit-element/lit-element.js";
import { SecureRequestXhr } from "@lrnwebcomponents/secure-request/secure-request.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@vaadin/vaadin-upload/vaadin-upload.js";
import "@lrnwebcomponents/secure-request/secure-request.js";
import "./lrnapp-studio-submission-edit-add-asset.js";
import "./lrnapp-studio-submission-edit-file.js";
class LrnappStudioSubmissionEditFiles extends SecureRequestXhr(LitElement) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
          min-height: 200px;
        }
        #pages {
          display: block;
        }
        .files__files {
          display: flex;
          flex-wrap: wrap;
        }
        .files__files > * {
          margin-right: 16px;
          min-width: 200px;
        }
        paper-dialog {
          width: 50%;
          width: 50vmax;
          padding: 16px;
        }
      `
    ];
  }
  render() {
    return html`
      <div class="files__files">
        ${this.files.map(
          (file, index) => html`
            <lrnapp-studio-submission-edit-file
              .file="${file}"
              @deleted="${this._deleteImage}"
              data-index="${index}"
            ></lrnapp-studio-submission-edit-file>
          `
        )}
        <lrnapp-studio-submission-edit-add-asset
          @click="${this._addFile}"
          icon="editor:attach-file"
        ></lrnapp-studio-submission-edit-add-asset>
      </div>
      <paper-dialog id="dialog">
        <h2>Add Files</h2>
        <div class="files__upload">
          ${this.uploadUrl
            ? html`
                <vaadin-upload
                  accept="${this.fileTypes}"
                  target="${this.uploadUrl}"
                  method="POST"
                  form-data-name="file-upload"
                  @upload-success="${this._handleImageUploadSuccess}"
                >
                  <div class="files__drop-label">
                    <iron-icon icon="description"></iron-icon>
                    Upload files here:
                  </div>
                </vaadin-upload>
              `
            : ``}
        </div>
        <div>
          <paper-button dialog-dismiss>Cancel</paper-button>
        </div>
      </paper-dialog>
    `;
  }
  static get tag() {
    return "lrnapp-studio-submission-edit-files";
  }
  static get properties() {
    return {
      files: {
        type: Array,
        notify: true,
        value: null
      },
      selectedPage: {
        type: String,
        value: 0
      },
      uploadUrl: {
        type: String,
        value: null,
        observer: "log"
      },
      fileTypes: {
        type: String,
        value: ""
      }
    };
  }

  static get observers() {
    return ["_filesChanged(files)"];
  }

  _filesChanged(files) {}

  _addFile(e) {
    // @todo switch to singleton
    this.shadowRoot.querySelector("#dialog").open();
  }

  _selectPage(e) {
    var page = e.target.getAttribute("data-page");
    this.selectedPage = page;
  }

  _handleImageUploadSuccess(e) {
    this.selectedPage = 0;
    var files = [];
    var response = e.detail.xhr.response;
    // normalize response string
    var response = JSON.parse(response);
    // get the newely created file
    if (response.data.file) {
      var file = response.data.file;
      if (this.files === null) {
        this.files = [];
      }
      this.files.push(file);
      this.shadowRoot.querySelector("#dialog").close();
    }
  }

  _deleteImage(e) {
    var deleteIndex = e.target.getAttribute("data-index");
    this.files.splice(Number(deleteIndex), 1);
  }

  _canUpload() {
    const uploadUrl = this.uploadUrl;
    if (uploadUrl !== null) {
      return true;
    } else {
      return false;
    }
  }

  log(property) {}
  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    const uploadUrl = this.generateUrl("/api/files");
    if (uploadUrl !== null) {
      this.uploadUrl = uploadUrl;
    }
  }
}
window.customElements.define(
  LrnappStudioSubmissionEditFiles.tag,
  LrnappStudioSubmissionEditFiles
);
export { LrnappStudioSubmissionEditFiles };
