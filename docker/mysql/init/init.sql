-- =============================================================================================
-- MySQL 初始化脚本
-- =============================================================================================

-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS nextjs_auth CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 创建用户（如果不存在）
CREATE USER IF NOT EXISTS 'nextjs_user'@'%' IDENTIFIED BY 'nextjs_password';

-- 授权用户访问数据库
GRANT ALL PRIVILEGES ON nextjs_auth.* TO 'nextjs_user'@'%';

-- 刷新权限
FLUSH PRIVILEGES;

-- 使用数据库
USE nextjs_auth;

-- 可选：查看当前数据库
SELECT DATABASE();