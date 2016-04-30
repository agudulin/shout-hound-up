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

  const hideHoundContent = (tab) => {
    const tabCommentsSelector = {
      [CONVERSATION_TAB]: '.discussion-item',
      [FILES_CHANGED_TAB]: '.js-quote-selection-container'
    }
    const comments = document.querySelectorAll(tabCommentsSelector[tab])
    const commentsList = convertToList(comments)

    commentsList.filter(findHoundComments).map(hideHoundComments)
  }

  hideHoundContent(CONVERSATION_TAB)
})()
