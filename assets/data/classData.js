export const classes = [
    { 
        id: 'c1', 
        name: 'Lớp 12A1', 
        homeroomTeacher: 'Cô Nguyễn Thị Lan', 
        studentCount: 38,
        academicYear: '2023-2024',
        students: [
            { id: 's1', name: 'Nguyễn Văn An', dob: '20/01/2006', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Nguyễn Văn A', phone: '0901234567', email: 'phuhuynh.an@email.com' }, notes: 'Học lực giỏi, tích cực phát biểu xây dựng bài. Đội trưởng đội bóng rổ.' },
            { id: 's2', name: 'Trần Thị Bích', dob: '15/05/2006', gender: 'Nữ', avatar: require('../images/teacher2.png'), parent: { name: 'Bà Trần Thị B', phone: '0907654321', email: 'phuhuynh.bich@email.com' }, notes: 'Cần chú ý hơn trong môn Toán. Có năng khiếu vẽ.' },
            { id: 's3', name: 'Lê Văn Cường', dob: '10/09/2006', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Lê Văn C', phone: '0988888888', email: 'phuhuynh.cuong@email.com' }, notes: 'Có năng khiếu về các môn xã hội.' },
            { id: 's101', name: 'Hoàng Văn Dũng', dob: '11/03/2006', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Hoàng Văn D', phone: '0911223344', email: 'phuhuynh.dung@email.com' }, notes: 'Hay đi học trễ.' },
            { id: 's102', name: 'Phan Thị Hà', dob: '25/08/2006', gender: 'Nữ', avatar: require('../images/teacher4.png'), parent: { name: 'Bà Phan Thị H', phone: '0922334455', email: 'phuhuynh.ha@email.com' }, notes: 'Học khá, rất chăm chỉ.' },
            { id: 's103', name: 'Vũ Mạnh Hùng', dob: '02/12/2006', gender: 'Nam', avatar: require('../images/avatar.png'), parent: { name: 'Ông Vũ Mạnh H', phone: '0933445566', email: 'phuhuynh.hung@email.com' }, notes: '' },
            { id: 's104', name: 'Đặng Thị Lan', dob: '18/04/2006', gender: 'Nữ', avatar: require('../images/teacher2.png'), parent: { name: 'Bà Đặng Thị L', phone: '0944556677', email: 'phuhuynh.lan@email.com' }, notes: 'Lớp phó học tập, gương mẫu.' },
            { id: 's105', name: 'Bùi Đức Minh', dob: '30/06/2006', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Bùi Đức M', phone: '0955667788', email: 'phuhuynh.minh@email.com' }, notes: 'Tiếp thu nhanh, đôi khi còn ồn ào trong lớp.' },
            { id: 's106', name: 'Hồ Thị Ngọc', dob: '05/01/2006', gender: 'Nữ', avatar: require('../images/teacher4.png'), parent: { name: 'Bà Hồ Thị N', phone: '0966778899', email: 'phuhuynh.ngoc@email.com' }, notes: 'Ngoan, lễ phép.' },
            { id: 's107', name: 'Dương Văn Phúc', dob: '14/02/2006', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Dương Văn P', phone: '0977889900', email: 'phuhuynh.phuc@email.com' }, notes: 'Cần cải thiện chữ viết.' },
        ]
    },
    { 
        id: 'c2', 
        name: 'Lớp 11B2', 
        homeroomTeacher: 'Cô Nguyễn Thị Lan', 
        studentCount: 35,
        academicYear: '2023-2024',
        students: [
            { id: 's4', name: 'Phạm Thị Dung', dob: '12/11/2007', gender: 'Nữ', avatar: require('../images/teacher4.png'), parent: { name: 'Bà Phạm Thị D', phone: '0912345678', email: 'phuhuynh.dung@email.com' }, notes: 'Có tiến bộ trong học kỳ vừa qua.' },
            { id: 's5', name: 'Hoàng Văn Em', dob: '03/03/2007', gender: 'Nam', avatar: require('../images/avatar.png'), parent: { name: 'Ông Hoàng Văn E', phone: '0987654321', email: 'phuhuynh.em@email.com' }, notes: 'Ngoan, hiền nhưng còn rụt rè.' },
            { id: 's201', name: 'Trần Minh Khang', dob: '22/07/2007', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Trần Minh K', phone: '0987111222', email: 'phuhuynh.khang@email.com' }, notes: 'Học lực khá, cần cố gắng hơn.' },
            { id: 's202', name: 'Lê Quỳnh Anh', dob: '09/09/2007', gender: 'Nữ', avatar: require('../images/teacher2.png'), parent: { name: 'Bà Lê Quỳnh A', phone: '0987333444', email: 'phuhuynh.anh@email.com' }, notes: 'Năng nổ trong các hoạt động phong trào.' },
            { id: 's203', name: 'Vũ Gia Bảo', dob: '01/01/2007', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Vũ Gia B', phone: '0987555666', email: 'phuhuynh.bao@email.com' }, notes: 'Thông minh nhưng đôi khi lơ là.' },
            { id: 's204', name: 'Phan Ngọc Mai', dob: '15/10/2007', gender: 'Nữ', avatar: require('../images/teacher4.png'), parent: { name: 'Bà Phan Ngọc M', phone: '0987777888', email: 'phuhuynh.mai@email.com' }, notes: 'Trầm tính, ít nói.' },
        ]
    },
    { 
        id: 'c3', 
        name: 'Lớp 10C5', 
        homeroomTeacher: 'Thầy Trần Minh Hùng', 
        studentCount: 48,
        academicYear: '2023-2024',
        students: [
            { id: 's6', name: 'Vũ Minh Anh', dob: '25/07/2008', gender: 'Nữ', avatar: require('../images/teacher2.png'), parent: { name: 'Bà Vũ Thị A', phone: '0977123456', email: 'phuhuynh.anh@email.com' }, notes: 'Mới chuyển lớp, cần quan tâm thêm.' },
            { id: 's301', name: 'Nguyễn Tuấn Kiệt', dob: '19/02/2008', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Nguyễn Tuấn K', phone: '0966123456', email: 'phuhuynh.kiet@email.com' }, notes: '' },
            { id: 's302', name: 'Trần Bảo Vy', dob: '08/08/2008', gender: 'Nữ', avatar: require('../images/teacher4.png'), parent: { name: 'Bà Trần Bảo V', phone: '0955123456', email: 'phuhuynh.vy@email.com' }, notes: 'Hay phát biểu ý kiến xây dựng bài.' },
            { id: 's303', name: 'Lê Gia Huy', dob: '11/11/2008', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Lê Gia H', phone: '0944123456', email: 'phuhuynh.huy@email.com' }, notes: 'Học tốt các môn tự nhiên.' },
        ]
    },
    { 
        id: 'c4', 
        name: 'CLB Lập trình', 
        homeroomTeacher: 'Thầy Bùi Văn Khoa', 
        studentCount: 8,
        academicYear: '2023-2024',
        isClub: true, // Add a flag for clubs
        students: [
            { id: 's3', name: 'Lê Văn Cường', dob: '10/09/2006', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Lê Văn C', phone: '0988888888', email: 'phuhuynh.cuong@email.com' }, notes: 'Có năng khiếu về các môn xã hội.' },
            { id: 's105', name: 'Bùi Đức Minh', dob: '30/06/2006', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Bùi Đức M', phone: '0955667788', email: 'phuhuynh.minh@email.com' }, notes: 'Tiếp thu nhanh, đôi khi còn ồn ào trong lớp.' },
            { id: 's203', name: 'Vũ Gia Bảo', dob: '01/01/2007', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Vũ Gia B', phone: '0987555666', email: 'phuhuynh.bao@email.com' }, notes: 'Thông minh nhưng đôi khi lơ là.' },
            { id: 's303', name: 'Lê Gia Huy', dob: '11/11/2008', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Lê Gia H', phone: '0944123456', email: 'phuhuynh.huy@email.com' }, notes: 'Học tốt các môn tự nhiên.' },
        ]
    },
    { 
        id: 'c5', 
        name: 'Đội tuyển HSG Lý', 
        homeroomTeacher: 'Cô Nguyễn Thị Lan', 
        studentCount: 4,
        academicYear: '2023-2024',
        isClub: true,
        students: [
            { id: 's1', name: 'Nguyễn Văn An', dob: '20/01/2006', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Nguyễn Văn A', phone: '0901234567', email: 'phuhuynh.an@email.com' }, notes: 'Học lực giỏi, tích cực phát biểu xây dựng bài. Đội trưởng đội bóng rổ.' },
            { id: 's101', name: 'Hoàng Văn Dũng', dob: '11/03/2006', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Hoàng Văn D', phone: '0911223344', email: 'phuhuynh.dung@email.com' }, notes: 'Hay đi học trễ.' },
            { id: 's201', name: 'Trần Minh Khang', dob: '22/07/2007', gender: 'Nam', avatar: require('../images/teacher3.png'), parent: { name: 'Ông Trần Minh K', phone: '0987111222', email: 'phuhuynh.khang@email.com' }, notes: 'Học lực khá, cần cố gắng hơn.' },
            { id: 's203', name: 'Vũ Gia Bảo', dob: '01/01/2007', gender: 'Nam', avatar: require('../images/teacher1.png'), parent: { name: 'Ông Vũ Gia B', phone: '0987555666', email: 'phuhuynh.bao@email.com' }, notes: 'Thông minh nhưng đôi khi lơ là.' },
        ]
    },
]; 