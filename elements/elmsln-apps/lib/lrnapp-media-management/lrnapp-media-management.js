import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-scroll-threshold/iron-scroll-threshold.js";
import "@polymer/iron-image/iron-image.js";
import "@polymer/iron-list/iron-list.js";
import "@polymer/paper-button/paper-button.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/materializecss-styles/materializecss-styles.js";
Polymer({
  _template: html`
    <style include="materializecss-styles">
      :host {
        display: block;
      }
      paper-button {
        padding: 0;
        margin: 0;
        min-width: 16px;
      }
      #details {
        opacity: 0.5;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0 16px 0 0;
        background-color: white;
        padding: 8px;
      }
      #details:hover {
        opacity: 1;
      }
      #details span {
        font-size: 10px;
        font-weight: normal;
      }
      #details .comment-on-work {
        font-size: 12px;
        background-color: white;
      }
    </style>
    <iron-ajax
      id="ajax"
      url="[[source-path]]"
      params=""
      handle-as="json"
      last-response="{{submissions}}"
    ></iron-ajax>
    <iron-scroll-threshold on-lower-threshold="_loadMoreData" id="threshold">
      <iron-list grid items="[[_toArray(submissions.data)]]" as="item">
        <template>
          <paper-card
            heading="{{item.title}}"
            image=""
            elevation="2"
            animated-shadow="true"
          >
            <div class="card-content"></div>
            <div class="card-actions">
              <a href="{{item.url}}"
                ><paper-button raised>View</paper-button></a
              >
              <a href="{{item.edit_url}}"
                ><paper-button raised>Edit</paper-button></a
              >
            </div>
          </paper-card>
        </template>
      </iron-list>
    </iron-scroll-threshold>
    <paper-dialog
      id="dialog"
      entry-animation="scale-up-animation"
      exit-animation="fade-out-animation"
    >
      <paper-dialog-scrollable id="dialogResponse">
        <iron-image src="{{activeImage}}"></iron-image>
        <div id="details">
          <div class="title">
            <span>Title:</span> <span>{{activeTitle}}</span>
          </div>
          <div class="author">
            <span>Author:</span> <span>{{activeAuthor}}</span>
          </div>
          <div class="comments">
            <span>Comments:</span> <span>{{activeComments}}</span>
          </div>
          <div class="comment-on-work">
            <a href="{{activeUrl}}">
              <paper-button raised>Comment on this work</paper-button>
            </a>
          </div>
        </div>
      </paper-dialog-scrollable>
    </paper-dialog>
  `,
  is: "lrnapp-media-management",
  listeners: {
    click: "_triggerDialog"
  },
  properties: {
    submissions: {
      type: Array,
      notify: true
    },
    activeImage: {
      type: String,
      reflectToAttribute: true,
      notify: true
    },
    activeTitle: {
      type: String,
      reflectToAttribute: true,
      notify: true
    },
    activeAuthor: {
      type: String,
      reflectToAttribute: true,
      notify: true
    },
    activeComments: {
      type: String,
      reflectToAttribute: true,
      notify: true
    },
    activeUrl: {
      type: String,
      reflectToAttribute: true,
      notify: true
    }
  },
  /**
   * When someone clicks if there is a url, then we need to
   * remote load whatever is in that url.
   */
  _triggerDialog: function(e) {
    let root = this;
    // make sure we found an image as we're going through here
    if (e.target.nextElementSibling.nodeName == "IMG") {
      root.activeImage = e.target.nextElementSibling.src;
      root.activeTitle = e.target.parentElement.title;
      root.activeAuthor = e.target.parentElement.author;
      root.activeComments = e.target.parentElement.comments;
      root.activeUrl = e.target.parentElement.openUrl;
      this.shadowRoot.querySelector("#dialog").toggle();
    }
  },
  _loadMoreData: function(e) {
    let root = this;
    root.shadowRoot.querySelector("#ajax").generateRequest();
    root.shadowRoot.querySelector("#threshold").clearTriggers();
  },
  /**
   * Simple way to convert from object to array.
   */
  _toArray: function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
});
