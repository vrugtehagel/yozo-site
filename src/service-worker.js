// Modules are not fully supported yet, so there are modified versions
// for each module that simply throw things into the global scope.
// That way, we can use importScripts and still separate related code.

// Refactor when ES6 modules are supported in service workers.

importScripts('/archive/lib-0.3.8.js')
importScripts('/-/js/service-worker/service-worker.js')
importScripts('/-/js/context-messenger/service-worker.js')
importScripts('/-/js/file-server/service-worker.js')
