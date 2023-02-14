const newFolderName = function (folders) {
  const n = folders.length
  if (folders.includes('New Folder') && !folders.includes('New Folder (2)')) {
    folders.push('New Folder (2)')
  }
  if (!folders.includes('New Folder')) {
    folders.push('New Folder')
  }
  if (n === 0) {
    folders.push('New Folder')
  }
  if (folders.includes('New Folder (' + n + ')') && !folders.includes('New Folder (' + (n + 1) + ')')) {
    folders.push('New Folder (' + (n + 1) + ')')
  }
  if (!folders.includes('New Folder (' + n + ')') && folders.includes('New Folder (' + (n + 1) + ')')) {
    folders.push('New Folder (' + n + ')')
  }

  return folders[n]
}
module.exports = { newFolderName }
