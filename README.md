# 来客をSlackに通知するアプリケーション

## 動作画像

![result](https://github.com/cw-tatsuyankmura/notify-slack/blob/media/readme/call.gif)

![result](https://github.com/cw-tatsuyankmura/notify-slack/blob/media/readme/admin.gif)

## 技術スタック

- typescript
- React/redux
- firebase
  - firestore
  - firehosting

## .envの設定

```
REACT_APP_FIREBASE_API_KEY = 
REACT_APP_FIREBASE_AUTH_DOMAIN = 
REACT_APP_FIREBASE_DATABASE_URL = 
REACT_APP_FIREBASE_PROJECT_ID = 
REACT_APP_FIREBASE_STORAGE_BUCKET = 

REACT_APP_FIRESTORE_COLLECTION_MEMBERS = <表示するメンバーのコレクション名>
REACT_APP_FIRESTORE_COLLECTION_INDEX_COUNTER = <メンバーのindexIdを保存しておくコレクション名>
REACT_APP_INDEX_COUNTER_DOC_ID = 

REACT_APP_SLACK_TOKEN = 
REACT_APP_SLACK_CHANNEL_NAME = #test_slack
REACT_APP_SLACK_BOT_NAME = VISITOR CALL BOT
```

## firestoreの構成

メンバーのフィールド

```
name: string
position: string
indexId: number <ドキュメントIDが自動で付与されるため、フィールドでindexを管理する>
slackId: string
```
indexのフィールド

```
id: number
```
