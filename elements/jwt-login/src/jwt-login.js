import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-ajax/iron-ajax.js";
/**
 * `jwt-login`
 * `a simple element to check for and fetch JWTs`
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 * - jwt - a json web token which is an encrypted security token to talk
 */
class JwtLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          visibility: hidden;
        }
      </style>
      <iron-ajax
        id="loginrequest"
        method="[[method]]"
        body="[[body]]"
        url="[[url]]"
        handle-as="json"
        content-type="application/json"
        on-response="loginResponse"
      >
      </iron-ajax>
    `;
  }

  static get tag() {
    return "jwt-login";
  }

  static get properties() {
    return {
      /**
       * url
       */
      url: {
        type: String
      },
      /**
       * Request method
       */
      method: {
        type: String,
        value: "GET"
      },
      /**
       * Optional body, useful when doing posts
       */
      body: {
        type: Object,
        value: {}
      },
      /**
       * Key that contains the token in local storage
       */
      key: {
        type: String,
        value: "jwt"
      },
      /**
       * JSON Web token to securely pass around
       */
      jwt: {
        type: String,
        notify: true
      }
    };
  }
  /**
   * Ready life cycle
   */
  ready() {
    super.ready();
    // set jwt from local storage bin
    this.jwt = localStorage.getItem(this.key);
    this.dispatchEvent(
      new CustomEvent("jwt-token", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: this.jwt
      })
    );
  }
  /**
   * Request a user login if we need one or log out
   */
  toggleLogin() {
    // null is default, if we don't have anything go get one
    if (this.jwt == null) {
      this.$.loginrequest.generateRequest();
    } else {
      // we were told to logout, reset body
      this.set("body", {});
      // remove this key from local storage bin
      localStorage.removeItem(this.key);
      // reset jwt
      this.jwt = null;
      // fire login event but false meaning we've executed the logout url
      this.dispatchEvent(
        new CustomEvent("jwt-logged-in", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: false
        })
      );
    }
  }
  /**
   * Login bridge to get a JWT and hang onto it
   */
  loginResponse(e) {
    this.jwt = e.detail.response;
    if (this.jwt == null || this.jwt == "") {
      // jwt was invalid some how
      this.dispatchEvent(
        new CustomEvent("jwt-logged-in", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: false
        })
      );
    } else {
      // set the jwt into local storage so we can reference later
      localStorage.setItem(this.key, this.jwt);
      this.dispatchEvent(
        new CustomEvent("jwt-token", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this.jwt
        })
      );
      this.dispatchEvent(
        new CustomEvent("jwt-logged-in", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: true
        })
      );
    }
  }
}
window.customElements.define(JwtLogin.tag, JwtLogin);
export { JwtLogin };
