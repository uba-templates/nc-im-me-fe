## er（巡检管理）模块

``` bash
├── components      #组件类
│   ├── Welcome
│   └── User
|       └── index.jsx
├── containers      #容器类
|   ├── User.jsx
│   └── UserAdd.jsx
├── models          #模型
|   └── User.jsx
|── services        #接口请求类
|   └── User.jsx
```

### 开发节点时文件目录说明
- 在`components`下新建一个节点文件夹，用于存放页面或页面拆分的组件。
- 在`containers`文件夹下不需新建文件夹，直接存放节点容器文件，节点下一个页面对应一个容器文件，*如`User`节点有列表页和新增页，则在`containers`下创建`User.jsx`和`UserAdd.jsx`*。
- 在`models`文件夹下不需新建文件夹,直接新建节点模型（*一个节点对应一个模型文件，无需新建文件夹*）。
- 在`services`文件夹下不需新建文件夹，直接新建节点的接口请求文件（*一个节点对应一个接口请求文件，无需新建文件夹*）
