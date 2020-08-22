import {css} from '../../vendor/lit-element/lit-element.js'
import buttonsCSS from '../buttons2.css.js'
import inputsCSS from '../inputs.css.js'
import tooltipCSS from '../tooltip.css.js'
import markdownCSS from '../markdown.css.js'

const cssStr = css`
${buttonsCSS}
${inputsCSS}
${tooltipCSS}
${markdownCSS}

:host {
  --text-color--result-link: blue;
  --bg-color--unread: #f2f7ff;
}

@media (prefers-color-scheme: dark) {
  :host {
    --text-color--result-link: #1043da;
    --bg-color--unread: #f2f7ff;
  }
}

/** COMMON RECORD STYLES **/

a {
  text-decoration: none;
  cursor: initial;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.record .favicon {
  display: block;
  width: 16px;
  height: 16px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 8px;
  font-size: 14px;
}

.record .sysicon {
  display: inline-block;
  height: 16px;
  width: 16px;
  font-size: 9px;
  line-height: 16px;
  background: var(--bg-color--semi-light);
  margin-right: 8px;
  border-radius: 50%;
}

.record .title a {
  color: var(--color-text--default);
}

.notification {
  padding: 5px 4px 4px 58px;
  margin-right: 19px;
  font-size: 14px;
  color: var(--text-color--light);
}

.notification.unread {
  background: var(--bg-color--unread);
}

.notification a {
  color: var(--text-color--light);
}

:host([render-mode="comment"]) .notification {
  padding: 0 12px 5px;
}

/** EXPANDED LINK STYLES **/

.record.expanded-link {
  display: flex;
  align-items: center;
  color: var(--text-color--lightish);
}

.record.expanded-link:first-child {
  margin-top: 0;
}

.record.expanded-link .thumb {
  display: block;
  width: 100px;
  flex: 0 0 100px;
  height: 100px;
  background: var(--bg-color--light);
  overflow: hidden;
  margin-right: 30px;
  display: none;
}

.record.expanded-link .thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.record.expanded-link .thumb .icon {
  display: block;
  height: 100%;
  text-align: center;
  color: var(--text-color--light);
  line-height: 100px;
  font-size: 32px;
}

.record.expanded-link .info {
  flex: 1;
  overflow: hidden;
}

.record.expanded-link .info > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record.expanded-link .title {
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 18px;
}

.record.expanded-link .title a {
  color: var(--text-color--result-link);
}

.record.expanded-link .href {
  font-size: 14px;
  margin-bottom: 4px;
}

.record.expanded-link .href a {
  color: var(--text-color--light);
}

.record.expanded-link .href .fa-angle-right {
  font-size: 11px;
}

.record.expanded-link .origin {
  display: flex;
  align-items: center;
  font-size: 13px;
}

.record.expanded-link .origin-note {
  margin-right: 5px;
}

.record.expanded-link .author {
  color: var(--text-color--lightish);
  font-weight: 500;
  margin-right: 6px;
}

.record.expanded-link .type {
  margin: 0 6px;
}

.record.expanded-link .date {
  color: var(--text-color--light);
  margin: 0 6px;
}

.record.expanded-link .excerpt {
  white-space: initial;
  color: var(--text-color--light);
  margin-top: 10px;
  line-height: 1.3;
  font-size: 15px;
  letter-spacing: 0.4px;
}

.record.expanded-link .ctrl {
  margin-left: 6px;
  font-size: 12px;
  color: var(--text-color--light);
  cursor: pointer;
}

.record.expanded-link .ctrl:hover {
  text-decoration: underline;
}

/** ACTION STYLES **/

.record.action {
  display: flex;
  align-items: center;
  color: var(--text-color--lightish);
}

:host([thread-view]) .record.action {
  padding: 8px 14px;
  align-items: baseline;
}

.record.action.unread {
  background: var(--bg-color--unread);
  outline: 5px solid var(--bg-color--unread);
}

.record.action > * {
  margin-right: 5px;
}

.record.action .thumb {
  display: block;
  width: 30px;
  flex: 0 0 30px;
  height: 30px;
  background: var(--bg-color--semi-light);
  border-radius: 50%;
  margin-right: 18px;
  position: relative;
  top: 1px;
}

:host([thread-view]) .record.action .thumb {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  margin: 0 5px 0 0;
  top: 2px;
}

.record.action .thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.record.action .thumb .icon {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--text-color--light);
  line-height: 30px;
  font-size: 12px;
}

.record.action .thumb .icon .fa-lock {
  font-size: 8px;
  position: absolute;
  right: 3px;
  bottom: 27px;
}

.record.action .author {
  color: var(--text-color--default);
  font-weight: 600;
}

/** LINK STYLES **/

.record.link {
  display: flex;
  align-items: center;
  color: var(--text-color--lightish);
}

.record.link.unread {
  background: var(--bg-color--unread);
  outline: 5px solid var(--bg-color--unread);
}

.record.link .thumb {
  display: block;
  width: 30px;
  flex: 0 0 30px;
  height: 30px;
  background: var(--bg-color--semi-light);
  border-radius: 50%;
  margin-right: 18px;
  position: relative;
  top: 1px;
}

.record.link .thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.record.link .thumb .icon {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--text-color--light);
  line-height: 30px;
  font-size: 12px;
}

.record.link .thumb .icon .fa-lock {
  position: absolute;
  font-size: 8px;
  right: 0px;
  bottom: 24px;
}

.record.link .thumb .icon .small-thumb {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  object-fit: cover;
  right: -6px;
  bottom: 20px;
  border: 2px solid var(--bg-color--default);
}

.record.link .container {
  flex: 1;
}

.record.link .action-description {
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record.link .origin .author {
  color: var(--text-color--lightish);
  font-weight: 600;
}

.record.link .title {
  max-width: 590px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-color--light);
  
}

.record.link .title .link-title {
  letter-spacing: 0.5px;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-color--result-link);
}

.record.link .title .link-origin {
  color: var(--text-color--pretty-light);
}

.record.link .date a {
  color: var(--text-color--light);
}

.record.link .ctrls {
  font-size: 13px;
  color: var(--text-color--light);
}

.record.link .ctrls :-webkit-any(.fas, .far) {
  font-size: 11px;
  position: relative;
  top: -1px;
}

.record.link .ctrls a.ctrl {
  display: inline-block;
  color: var(--text-color--light);
  font-weight: 500;
  margin-left: 2px;
}

.record.link .ctrls a:hover {
  cursor: pointer;
  color: var(--text-color--default);
}

.record.link .ctrls a .fa-comment-alt {
  position: relative;
  top: 1px;
  font-size: 12px;
}

/** CARD STYLES **/

.record.card {
  position: relative;
  display: grid;
  grid-template-columns: 45px 1fr;
  color: var(--text-color--lightish);
}

.record.card.unread {
  background: var(--bg-color--unread);
  outline: 5px solid var(--bg-color--unread);
  margin-bottom: 5px;
}

.record.card .info {
  display: flex;
  align-items: center;
}

.record.card .thumb {
  display: block;
  width: 30px;
  height: 30px;
  background: var(--bg-color--semi-light);
  border-radius: 50%;
  position: relative;
  top: 8px;
}

.record.card .thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.record.card .thumb .icon {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--text-color--light);
  line-height: 20px;
  font-size: 8px;
}

.record.card .arrow {
  content: '';
  display: block;
  position: absolute;
  top: 20px;
  left: 41px;
  width: 8px;
  height: 8px;
  z-index: 10;
  background: var(--bg-color--default);
  border-top: 1px solid var(--border-color--light);
  border-left: 1px solid var(--border-color--light);
  transform: rotate(-45deg);
}

.record.card.is-notification .arrow {
  background: var(--bg-color--light);
}

.record.card.unread .arrow {
  border-color: var(--border-color--unread);
}

.record.card .container {
  border: 1px solid var(--border-color--light);
  border-radius: 4px;
  background: var(--bg-color--default);
  padding: 2px;
  min-width: 0; /* this is a hack to make the overflow: hidden work */
}

.record.card .container:hover {
  cursor: pointer;
  border: 1px solid var(--border-color--dark);
}

.record.card.unread .container {
  background: transparent;
  border-color: var(--border-color--unread);
}

.record.card .header {
  display: flex;
  align-items: baseline;
  font-size: 13px;
  padding: 8px 12px 6px;
}

.record.card .header > * {
  margin-right: 5px;
  white-space: nowrap;
}

.record.card .origin .icon {
  margin-right: 5px;
}

.record.card .header a {
  color: var(--text-color--light);
}

.record.card .origin .author {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color--default);
}

.record.card .title {
  font-weight: normal;
  letter-spacing: 0.5px;
}

.record.card .title a {
  color: var(--text-color--result-link);
}

.record.card .context {
  box-sizing: border-box;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record.card .context a {
  color: var(--text-color--light);
}

.record.card .content {
  white-space: initial;
  color: var(--text-color--default);
  line-height: 1.3125;
  font-size: 14px;
  padding: 0px 12px 10px;
}

.record.card .content > :first-child { margin-top: 0; }
.record.card .content > :last-child { margin-bottom: 0; }

.record.card .ctrls {
  padding: 6px 12px 6px;
}

.record.card .ctrls a {
  display: inline-block;
  margin-right: 16px;
  color: var(--text-color--light);
  font-size: 13px;
}

.record.card .ctrls a:hover {
  cursor: pointer;
  color: var(--text-color--default);
}

.record.card .ctrls a :-webkit-any(.far, .fas) {
  color: var(--text-color--very-light);
}

.record.card .ctrls a small {
  position: relative;
  top: -1px;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.record.card beaker-post-composer {
  display: block;
  padding: 10px;
}

:host([noborders]) .record.card {
  grid-template-columns: 34px 1fr;
}

:host([noborders]) .record.card .thumb {
  margin: 5px 0 0;
  width: 36px;
  height: 36px;
}

:host([noborders]) .record.card .arrow {
  display: none;
}

:host([noborders]) .record.card .container {
  border-color: transparent !important;
}

:host([noborders]) .record.card beaker-post-composer {
  margin-left: -36px;
}

/** COMMENT STYLES **/

.record.comment {
  background: var(--bg-color--light);
  padding: 10px 14px 8px;
  border-radius: 4px;
}

.record.comment:hover {
  cursor: pointer;
  background: var(--bg-color--semi-light);
}

.record.comment.unread {
  background: var(--bg-color--unread);
  outline: 5px solid var(--bg-color--unread);
  border: 1px solid var(--border-color--unread);
}

.record.comment .header {
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 0 0 6px;
}

.record.comment .header > * {
  margin-right: 5px;
  white-space: nowrap;
}
.record.comment .header a {
  color: var(--text-color--light);
}

.record.comment .thumb {
  width: 14px;
  height: 14px;
  background: var(--bg-color--semi-light);
  border-radius: 50%;
}

.record.comment .thumb img {
  display: block;
  width: 14px;
  height: 14px;
  object-fit: scale-down;
}

.record.comment .origin .author {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color--default);
}

.record.comment .title {
  font-weight: normal;
  letter-spacing: 0.5px;
}

.record.comment .title a {
  color: var(--text-color--result-link);
}

.record.comment .context {
  box-sizing: border-box;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record.comment .content {
  white-space: initial;
  color: var(--text-color--default);
  line-height: 1.3125;
  font-size: 14px;
}

.record.comment .content > :first-child { margin-top: 0; }
.record.comment .content > :last-child { margin-bottom: 0; }

.record.comment .ctrls {
  padding: 6px 0 0;
}

.record.comment .ctrls a {
  display: inline-block;
  color: var(--text-color--light);
  font-size: 13px;
}

.record.comment .ctrls a:hover {
  cursor: pointer;
  color: var(--text-color--default);
}

.record.comment .ctrls a :-webkit-any(.far, .fas) {
  color: var(--text-color--very-light);
}

.record.comment .ctrls a small {
  position: relative;
  top: -1px;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.record.comment beaker-post-composer {
  display: block;
  padding: 10px 0;
}

`
export default cssStr