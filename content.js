(() => {
  const findHoundComments = (comment) => (
    comment.querySelector('img[alt*="houndci-bot"]')
  )
  const hideHoundComments = (comment) => (
    comment.classList.add('hidden')
  )
  const convertToList = (nodeList) => (
    Array.prototype.slice.call(nodeList)
  )
  const CONVERSATION_TAB = 'CONVERSATION_TAB'
  const FILES_CHANGED_TAB = 'FILES_CHANGED_TAB'
  const NEWSLETTER = 'NEWSLETTER'

  const hideHoundContent = (tab) => {
    const tabCommentsSelector = {
      [CONVERSATION_TAB]: '.discussion-item',
      [FILES_CHANGED_TAB]: '.js-quote-selection-container',
      [NEWSLETTER]: '.alert.issues_comment'
    }
    const comments = document.querySelectorAll(tabCommentsSelector[tab])
    const commentsList = convertToList(comments)

    commentsList.filter(findHoundComments).map(hideHoundComments)
  }

  document.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('js-pjax-history-navigate')) {
      return
    }

    if (/Conversation/.test(target.text)) {
      hideHoundContent(CONVERSATION_TAB)
    } else if (/Files\schanged/.test(target.text)) {
      hideHoundContent(FILES_CHANGED_TAB)
    }
  })
})()
