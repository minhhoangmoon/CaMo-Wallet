### **README.md**

```markdown
# **Camo Wallet**  

**Camo Wallet** là một ứng dụng ví di động phi tập trung được xây dựng trên blockchain Cardano. Ứng dụng mang lại trải nghiệm đơn giản, nhanh chóng và an toàn cho người dùng khi quản lý tài sản ADA của mình. Với giao diện trực quan và tích hợp công nghệ blockchain, Camo Wallet giúp mọi giao dịch trở nên minh bạch và dễ dàng.  

---

## **Tính năng chính**
- **Tạo ví mới**: Người dùng có thể tạo ví Cardano mới với địa chỉ và khóa bảo mật.  
- **Kiểm tra số dư**: Hiển thị số dư hiện tại của ví.  
- **Chuyển tiền**: Gửi ADA đến địa chỉ khác một cách nhanh chóng và bảo mật.  
- **Quản lý nhiều ví**: Người dùng có thể lưu và chuyển đổi giữa các ví khác nhau.  

---

## **Kiến trúc dự án**

### 1. **Backend**  
- **Ngôn ngữ**: Node.js  
- **Chức năng chính**:  
  - Tương tác với blockchain Cardano qua Blockfrost API hoặc Cardano CLI.  
  - Cung cấp API RESTful cho ứng dụng di động.  

### 2. **Frontend**  
- **Công nghệ**: React Native  
- **Mục tiêu**: Xây dựng giao diện người dùng thân thiện, hỗ trợ cả Android và iOS.  

### 3. **Blockchain Integration**  
- **Blockchain**: Cardano  
- **API tích hợp**: Blockfrost API  
- **Tính năng nổi bật**:  
  - Xác nhận giao dịch trực tiếp trên blockchain.  
  - Lưu trữ minh bạch thông tin giao dịch.  

---

## **Hướng dẫn cài đặt**

### **Yêu cầu hệ thống**
- Node.js >= 16.x  
- React Native CLI  
- Cardano Node và Cardano CLI (nếu tự quản lý blockchain)  
- Tài khoản Blockfrost API  

### **1. Cài đặt backend**
1. Clone repository:  
   ```bash
   git clone https://github.com/your-repo/camo-wallet.git
   cd camo-wallet/backend
   ```
2. Cài đặt các package:  
   ```bash
   npm install
   ```
3. Tạo file `.env` và cấu hình:  
   ```env
   BLOCKFROST_API_KEY=your_blockfrost_api_key
   PORT=3000
   ```
4. Khởi chạy server:  
   ```bash
   node index.js
   ```

### **2. Cài đặt frontend**
1. Chuyển đến thư mục frontend:  
   ```bash
   cd camo-wallet/frontend
   ```
2. Cài đặt các package:  
   ```bash
   npm install
   ```
3. Chạy ứng dụng:  
   - **Android**:  
     ```bash
     npx react-native run-android
     ```
   - **iOS**:  
     ```bash
     npx react-native run-ios
     ```

---

## **Sử dụng ứng dụng**

### **Chức năng ví**
1. **Tạo ví mới**  
   - Người dùng nhập tên ví.  
   - Hệ thống tự động tạo địa chỉ và private key.  

2. **Kiểm tra số dư**  
   - Nhập địa chỉ ví hoặc chọn từ danh sách ví đã lưu.  
   - Hệ thống hiển thị số dư bằng ADA và lịch sử giao dịch.  

3. **Gửi tiền**  
   - Nhập địa chỉ người nhận, số lượng ADA và xác nhận giao dịch.  
   - Theo dõi trạng thái giao dịch trực tiếp từ blockchain.  

4. **Quản lý ví**  
   - Lưu trữ nhiều ví và chuyển đổi nhanh chóng giữa các tài khoản.  

---

## **Cấu trúc thư mục**

```plaintext
camo-wallet/
│
├── backend/                     # Backend server
│   ├── index.js                 # File chính của API
│   ├── package.json             # Dependencies của Node.js
│   └── .env                     # File cấu hình
│
├── frontend/                    # Frontend ứng dụng di động
│   ├── App.js                   # Giao diện chính
│   ├── components/              # Các component UI
│   ├── screens/                 # Các màn hình ứng dụng
│   ├── package.json             # Dependencies của React Native
│   └── assets/                  # Hình ảnh và tài nguyên tĩnh
│
└── README.md                    # Hướng dẫn sử dụng
```

---

## **API Backend**

### **1. Tạo ví mới**
- **Endpoint**: `POST /api/create-wallet`  
- **Mô tả**: Tạo một ví Cardano mới.  
- **Trả về**:  
  - Địa chỉ ví.  
  - Khóa cá nhân (Private Key).  

### **2. Kiểm tra số dư**
- **Endpoint**: `GET /api/balance/:address`  
- **Mô tả**: Lấy số dư của địa chỉ ví cụ thể.  
- **Trả về**:  
  - Số dư (ADA).  
  - Thông tin giao dịch liên quan.  

### **3. Gửi giao dịch**
- **Endpoint**: `POST /api/send-transaction`  
- **Mô tả**: Gửi ADA đến địa chỉ khác.  
- **Body**:  
  - `fromAddress`: Địa chỉ gửi.  
  - `toAddress`: Địa chỉ nhận.  
  - `amount`: Số lượng ADA.  
- **Trả về**: Trạng thái giao dịch.  

---

## **Demo**

**Ảnh chụp màn hình ứng dụng**  
- Giao diện màn hình chính.  
- Màn hình kiểm tra số dư.  
- Gửi giao dịch.  

---

## **Công nghệ sử dụng**
- **Blockchain**: Cardano  
- **Backend**: Node.js, Express.js  
- **Frontend**: React Native  
- **API tích hợp**: Blockfrost  

---

## **Kế hoạch phát triển**
- Tích hợp staking ADA.  
- Hỗ trợ ví cứng (hardware wallets).  
- Xây dựng giao diện web đồng bộ với ứng dụng di động.  

---

## **Đóng góp**
Mọi ý kiến đóng góp hoặc bug report, vui lòng mở issue hoặc pull request tại [Camo Wallet GitHub Repository](https://github.com/your-repo/camo-wallet).

---

