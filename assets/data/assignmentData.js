export const assignments = [
    {
        id: 'asg1',
        title: 'Phân tích tác phẩm "Vợ nhặt"',
        className: 'Lớp 12A1',
        dueDate: '2024-09-15T23:59:59Z',
        status: 'overdue', // quá hạn
        totalSubmissions: 35,
        totalStudents: 38,
        lateSubmissions: 5,
        description: 'Các em hãy viết một bài văn nghị luận phân tích tình huống truyện éo le và giá trị nhân đạo của tác phẩm "Vợ nhặt" của nhà văn Kim Lân. Bài làm tối thiểu 500 từ.',
        attachments: [
            { name: 'vo-nhat-van-mau.pdf', type: 'pdf' }
        ]
    },
    {
        id: 'asg2',
        title: 'Bài tập chương 1: Khảo sát hàm số',
        className: 'Lớp 12A1',
        dueDate: '2024-09-30T23:59:59Z',
        status: 'upcoming', // sắp tới hạn
        totalSubmissions: 10,
        totalStudents: 38,
        lateSubmissions: 0,
        description: 'Hoàn thành các bài tập 1 đến 5 trong sách giáo khoa trang 25. Chụp ảnh bài làm và nộp lại trước hạn chót.',
        attachments: []
    },
    {
        id: 'asg3',
        title: 'Báo cáo thí nghiệm: Con lắc đơn',
        className: 'Lớp 11B2',
        dueDate: '2024-09-10T23:59:59Z',
        status: 'graded', // đã chấm
        totalSubmissions: 35,
        totalStudents: 35,
        lateSubmissions: 2,
        description: 'Nộp báo cáo thực hành theo mẫu đã phát trên lớp. Ghi lại số liệu và rút ra kết luận.',
        attachments: [
             { name: 'mau-bao-cao-thuc-hanh.docx', type: 'doc' }
        ]
    },
    {
        id: 'asg4',
        title: 'Làm thơ 5 chữ chủ đề Mùa Thu',
        className: 'Lớp 10C5',
        dueDate: '2024-10-05T23:59:59Z',
        status: 'upcoming',
        totalSubmissions: 0,
        totalStudents: 48,
        lateSubmissions: 0,
        description: 'Sáng tác một bài thơ 5 chữ (ngũ ngôn) về chủ đề mùa thu. Chú ý gieo vần và sử dụng các biện pháp tu từ.',
        attachments: []
    },
    {
        id: 'asg5',
        title: 'Vẽ sơ đồ tư duy: Hệ tuần hoàn',
        className: 'Lớp 11B2',
        dueDate: '2024-09-22T23:59:59Z',
        status: 'upcoming',
        totalSubmissions: 15,
        totalStudents: 35,
        lateSubmissions: 0,
        description: 'Dựa vào nội dung bài học, vẽ một sơ đồ tư duy tóm tắt cấu tạo và chức năng của hệ tuần hoàn ở người.',
        attachments: [
             { name: 'he-tuan-hoan.jpg', type: 'img' }
        ]
    },
]; 