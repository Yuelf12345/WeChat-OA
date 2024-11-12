域名 https://koa-sc42-127768-8-1331390308.sh.run.tcloudbase.com
wx.cloud.callContainer({
  "config": {
    "env": "prod-3gnfjeh1db598454"
  },
  "path": "/api/count",
  "header": {
    "X-WX-SERVICE": "koa-sc42"
  },
  "method": "POST",
  "data": {
    "action": "inc"
  }
})

代码源：github 仓库地址：WeixinCloud/wxcloudrun-koa

数据库 账号：root 密码：r3dnDf3X

CREATE TABLE `Users` ( `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户唯一标识' ,`open_id` varchar (2000) NULL DEFAULT '' COMMENT '微信用户的OpenID' ,`nickname` varchar (2000) NULL DEFAULT '' COMMENT '用户昵称' ,`gender` tinyint NULL COMMENT '性别 (0: 未知, 1: 男, 2: 女）' ,`birthday` date NULL COMMENT '生日' ,`location` varchar (2000) NULL DEFAULT '' COMMENT '地址' ,`created_at` datetime NULL COMMENT '创建时间' ,`updated_at` datetime NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间' , PRIMARY KEY (`user_id`) ) ENGINE = innodb DEFAULT CHARACTER SET = "utf8" COLLATE = "utf8_general_ci" ROW_FORMAT = Dynamic 