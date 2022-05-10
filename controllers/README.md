# Controller
    Đây là phần trung gian giúp người dùng giao tiếp và tương tác với phần Database. Khi người dùng gửi đi 1 request hay nhận về 1 respone, controller có tác vụ nhận nó và xử lý, song cũng xử lý các logic và làm việc liên quan đến DB.

## authCtrl.js
    Mô đun này liên quan đến xử lý việc đăng ký, đăng nhập, đăng xuất tài khoản người dùng, ngoài ra còn có hàm tạo Token để user truy cập. Các hàm trong mô đun đều sử dụng async / await để thực hiện 1 cách bất đồng bộ, tránh sự trì hoãn và phức tạp khi sử dụng hàm callback bình thường. Ngoài ra các hàm sử dụng try / catch để tránh trường trường hợp có lỗi xảy ra.

### Hàm register:   
    Đầu tiên, ta sử dụng destructuring để lấy dữ liệu từ phía người dùng nhập vào thông qua req.body. Tiếp đến sử dụng toLowerCase để đưa username người dùng nhập vào về dạng chữ thường, không khoảng trắng.

    Tiếp theo, sử dụng findOne để truy vấn trong CSDL xem có username nào trùng với username mà người dùng nhập vào không, nếu có sẽ thông báo lỗi.

    Tương tự như trên, tiếp theo là kiểm tra tồn tại của email

    Password hiện tại chỉ yêu cầu độ dài lớn hơn 6, sau đó được hash lại

    Tiếp theo tạo lại 1 hằng lưu lại tất cả thông tin người dùng đã được chỉnh sửa

    Hàm createAccessToken dùng để tạo token khi người dùng đăng ký, nó sẽ được yêu cầu xác thực lại khi người dùng đăng nhập.

    Hàm createRefreshToken dùng để tạo token để lưu vào cookie, giúp người dùng duy trì trạng thái đăng nhập. Cookie này có thời hạn là 30 ngày.

    Sau khi mọi thứ đã xong, tất cả thông tin của người dùng được lưu vào Database

### Hàm login:
    Hàm login hiện tại chỉ yêu cầu người dùng nhập email và mật khẩu. 
    
    Sau đó sử dụng truy vấn tìm kiếm tồn tại của email người dùng nhập vào (thuộc tính populate giúp truy vấn nhanh giá trị trong đó các chuỗi nhập vào là các mảng liên kết với schema Users, dấu trừ đằng trước là không lấy mảng đó.
    
    Tiếp theo là kiểm tra và thông báo lỗi nếu không tồn tại.

    Password của user nhập vào được kiểm tra xem có khớp với password đã được lưu trong DB hay không bằng thuộc tính compare của bcrypt. Nếu không thì thông báo lỗi

### Hàm logout:
    Hàm này khá đơn giản, nó chỉ dọn sạch cookie đã lưu trên web của người dùng, khi không còn cookie thì nó đưa người dùng về trạng thái chưa đăng nhập hoặc đăng ký.

### Hàm generateAccessToken
    Hàm này trong trường hợp web không có cookie tức refreshtoken sẽ báo lỗi, yêu cầu người dùng đăng nhập




    