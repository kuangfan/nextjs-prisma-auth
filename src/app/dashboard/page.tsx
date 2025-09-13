"use client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">仪表板</h1>
            <button
              onClick={() => console.log("退出登录")}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              退出登录
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                用户信息
              </h2>
              <p className="text-gray-700">
                <span className="font-medium">用户ID：</span>
                123123
              </p>
              <p className="text-gray-700">
                <span className="font-medium">用户名：</span>
                匡凡
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">欢迎</h2>
              <p className="text-blue-700">
                欢迎回来，匡凡！您已成功登录系统。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
