import { LitElement, html } from 'beaker://app-stdlib/vendor/lit-element/lit-element.js'
import { repeat } from 'beaker://app-stdlib/vendor/lit-element/lit-html/directives/repeat.js'
import { writeToClipboard } from 'beaker://app-stdlib/js/clipboard.js'
import * as toast from 'beaker://app-stdlib/js/com/toast.js'
import * as contextMenu from 'beaker://app-stdlib/js/com/context-menu.js'
import { EditBookmarkPopup } from '../com/edit-bookmark-popup.js'
import bookmarksCSS from '../../css/views/bookmarks.css.js'

function _href (bookmark) {
  return bookmark?.stat?.metadata?.href
}

function _title (bookmark) {
  return bookmark?.stat?.metadata?.title
}

export class BookmarksView extends LitElement {
  static get properties () {
    return {
      desktopBookmarks: {type: Array},
      otherBookmarks: {type: Array},
      filter: {type: String}
    }
  }

  static get styles () {
    return bookmarksCSS
  }

  constructor () {
    super()
    this.desktopBookmarks = undefined
    this.otherBookmarks = undefined
    this.filter = undefined
  }

  async load () {
    var desktopBookmarks = await beaker.filesystem.query({
      type: 'file',
      path: ['/desktop/*.goto']
    })
    var otherBookmarks = await beaker.filesystem.query({
      type: 'file',
      path: ['/bookmarks/*.goto']
    })
    this.desktopBookmarks = desktopBookmarks
    this.otherBookmarks = otherBookmarks
    console.log(this.desktopBookmarks, this.otherBookmarks)
  }

  bookmarkMenu (bookmark, x, y, right = false) {
    return contextMenu.create({
      x,
      y,
      right: right || (x > document.body.scrollWidth - 300),
      top: (y > window.innerHeight / 2),
      roomy: false,
      noBorders: true,
      fontAwesomeCSSUrl: 'beaker://assets/font-awesome.css',
      style: `padding: 4px 0`,
      items: [
        {icon: 'fa fa-external-link-alt', label: 'Open Link in New Tab', click: () => window.open(bookmark.stat.metadata.href)},
        {icon: 'fa fa-link', label: 'Copy Link Address', click: () => writeToClipboard(bookmark.stat.metadata.href)},
        {icon: 'fa fa-pencil-alt', label: 'Edit', click: () => this.onClickEdit(bookmark)},
        {icon: 'fa fa-times', label: 'Delete', click: () => this.onClickRemove(bookmark)}
      ]
    })
  }

  // rendering
  // =

  render () {
    var desktopBookmarks = this.desktopBookmarks
    if (desktopBookmarks && this.filter) {
      desktopBookmarks = desktopBookmarks.filter(bookmark => (
        _href(bookmark).toLowerCase().includes(this.filter)
        || _title(bookmark).toLowerCase().includes(this.filter)
      ))
    }
    var otherBookmarks = this.otherBookmarks
    if (otherBookmarks && this.filter) {
      otherBookmarks = otherBookmarks.filter(bookmark => (
        _href(bookmark).toLowerCase().includes(this.filter)
        || _title(bookmark).toLowerCase().includes(this.filter)
      ))
    }
    return html`
      <link rel="stylesheet" href="beaker://app-stdlib/css/fontawesome.css">
      ${desktopBookmarks ? html`
        <div class="bookmarks">
          <h3>Start Page</h3>
          ${repeat(desktopBookmarks, bookmark => this.renderBookmark(bookmark))}
          ${desktopBookmarks.length === 0 ? html`
            <div class="empty">No items found</div>
          ` : ''}
          <h3>Other</h3>
          ${repeat(otherBookmarks, bookmark => this.renderBookmark(bookmark))}
          ${otherBookmarks.length === 0 ? html`
            <div class="empty">No items found</div>
          ` : ''}
        </div>
      ` : html`
        <div class="loading"><span class="spinner"></span></div>
      `}
    `
  }

  renderBookmark (bookmark) {
    var {href, title} = bookmark.stat.metadata
    return html`
      <a
        class="bookmark"
        href=${href}
        title=${title || ''}
        @contextmenu=${e => this.onContextmenuBookmark(e, bookmark)}
      >
       <img class="favicon" src="asset:favicon:${href}">
       <div class="title">${title}</div>
       <div class="href">${href}</div>
        <div class="ctrls">
          <button class="transparent" @click=${e => this.onClickBookmarkMenuBtn(e, bookmark)}><span class="fas fa-fw fa-ellipsis-h"></span></button>
        </div>
      </div>
    `
  }

  // events
  // =

  async onContextmenuBookmark (e, bookmark) {
    e.preventDefault()
    e.stopPropagation()
    var el = e.currentTarget
    el.style.background = '#fafafd'
    await this.bookmarkMenu(bookmark, e.clientX, e.clientY)
    el.style.background = 'none'
  }

  onClickBookmarkMenuBtn (e, bookmark) {
    e.preventDefault()
    e.stopPropagation()
    var rect = e.currentTarget.getClientRects()[0]
    this.bookmarkMenu(bookmark, rect.right, rect.bottom, true)
  }

  async onClickEdit (file) {
    try {
      await EditBookmarkPopup.create(file)
      this.load()
    } catch (e) {
      // ignore
      console.log(e)
    }
  }

  async onClickRemove (file) {
    if (!confirm('Are you sure?')) return
    await beaker.filesystem.unlink(file.path)
    toast.create('Bookmark removed', '', 10e3)
    this.load()
  }
}

customElements.define('bookmarks-view', BookmarksView)