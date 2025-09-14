# Next.js 15 + Prisma + MySQL + NextAuth 登录注册系统

这是一个基于 Next.js 15 的全栈登录注册鉴权系统，集成了 Prisma ORM、MySQL 数据库、NextAuth.js 认证、Zod 验证和 React Hook Form 表单处理。

## 🚀 技术栈

- **前端框架**: Next.js 15 (App Router)
- **认证**: NextAuth.js v4
- **数据库**: MySQL
- **ORM**: Prisma
- **表单处理**: React Hook Form
- **验证**: Zod
- **样式**: Tailwind CSS v4
- **密码加密**: bcryptjs
- **语言**: TypeScript

## 📋 功能特性

- ✅ 用户注册
- ✅ 用户登录
- ✅ 会话管理
- ✅ 密码加密存储
- ✅ 表单验证
- ✅ 响应式设计
- ✅ 类型安全

## 🛠️ 环境要求

- Node.js 18.17 或更高版本
- MySQL 5.7+ 或 8.0+
- npm/yarn/pnpm/bun 包管理器

## 🚦 快速开始

### 1. 克隆项目

```bash
git clone [your-repo-url]
cd nextjs-prisma-auth
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 3. 环境配置

创建 `.env` 文件并配置以下环境变量：

```env
# 数据库连接
DATABASE_URL="mysql://username:password@localhost:3306/nextjs_auth"

# NextAuth 配置
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

#### 生成 NextAuth Secret
你可以使用以下命令生成一个安全的密钥：

```bash
openssl rand -base64 32
```

### 4. 数据库设置

#### 创建数据库
在 MySQL 中创建数据库：

```sql
CREATE DATABASE nextjs_auth CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### 运行数据库迁移

```bash
npx prisma migrate dev --name init
```

#### 生成 Prisma Client

```bash
npx prisma generate
```

### 5. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── dashboard/         # 受保护页面
│   ├── login/            # 登录页面
│   ├── register/         # 注册页面
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页
├── components/            # 可复用组件
├── lib/                 # 工具库
│   ├── auth.ts         # NextAuth 配置
│   └── client.ts       # Prisma Client
├── types/              # TypeScript 类型定义
└── ...

prisma/
├── schema.prisma       # 数据库模式
└── migrations/         # 数据库迁移文件

docker/                 # Docker 部署配置
├── app/
│   └── Dockerfile      # 应用镜像构建
├── nginx/
│   ├── nginx.conf      # Nginx 主配置
│   └── conf.d/
│       └── default.conf # 站点配置
└── mysql/
    └── init/
        └── init.sql    # 数据库初始化脚本
```

## 🔧 开发指南

### 数据库操作

#### 查看数据库
```bash
npx prisma studio
```

#### 更新数据库模式
1. 修改 `prisma/schema.prisma`
2. 创建迁移：
   ```bash
   npx prisma migrate dev --name your-migration-name
   ```
3. 更新 Prisma Client：
   ```bash
   npx prisma generate
   ```

### 代码规范

项目使用 ESLint 进行代码检查：

```bash
npm run lint
```

### 构建生产版本

```bash
npm run build
npm start
```

## 🔐 认证流程

### 注册流程
1. 用户访问 `/register`
2. 填写用户名和密码
3. 前端验证表单数据
4. 密码使用 bcryptjs 加密
5. 用户数据保存到 MySQL
6. 自动登录并重定向到 `/dashboard`

### 登录流程
1. 用户访问 `/login`
2. 输入用户名和密码
3. NextAuth 验证凭据
4. 创建会话
5. 重定向到 `/dashboard`

## 📝 API 端点

### 认证相关
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/signin` - 用户登录 (NextAuth)
- `POST /api/auth/signout` - 用户登出
- `GET /api/auth/session` - 获取当前会话

## 🎯 页面路由

- `/` - 首页
- `/login` - 登录页面
- `/register` - 注册页面
- `/dashboard` - 受保护的仪表板

## 🐛 常见问题

### 数据库连接问题
确保 MySQL 服务正在运行，并且 `.env` 文件中的连接字符串正确。

### Prisma 问题
如果遇到 Prisma 相关问题，尝试：
```bash
npx prisma generate
npx prisma db push
```

### 权限问题
确保 MySQL 用户有足够的权限创建和操作数据库。

## 🚀 部署

### Docker 部署（推荐）

#### 1. 环境准备
确保已安装 Docker 和 Docker Compose

#### 2. 配置环境变量
复制环境变量示例并修改：
```bash
cp .env.example .env
# 编辑 .env 文件，修改数据库密码和 NEXTAUTH_SECRET
```

#### 3. 构建并启动
```bash
# 一键启动所有服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

#### 4. 数据库初始化
```bash
# 运行数据库迁移
docker-compose exec app npx prisma migrate deploy

# 生成 Prisma Client
docker-compose exec app npx prisma generate

# 查看数据库状态
docker-compose exec app npx prisma studio
```

#### 5. 访问应用
- 应用地址: http://localhost
- 数据库管理: http://localhost:3306 (MySQL)

### Docker 常用命令
```bash
# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs app
docker-compose logs mysql
docker-compose logs nginx

# 重启服务
docker-compose restart app

# 进入容器
docker-compose exec app sh
docker-compose exec mysql mysql -u nextjs_user -p

# 清理数据卷（谨慎使用）
docker-compose down -v
```

### Vercel 部署
1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 部署

### 其他平台
支持部署到任何支持 Node.js 的平台，如 Netlify、Railway、Render 等。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
