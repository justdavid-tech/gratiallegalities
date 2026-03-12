import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'mazmuq7d',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  }
})
