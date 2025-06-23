export const conversations = [
    {
      id: '1',
      userName: 'Phụ huynh Minh Anh',
      userRole: 'Phụ huynh',
      avatar: require('../images/teacher1.png'),
      lastMessage: 'Chào cô, tôi muốn hỏi về tình hình học tập của cháu ạ, không biết dạo này cháu thế nào?',
      timestamp: '10:45',
      unreadCount: 2,
      isOnline: true,
      messages: [
        { id: 'msg1', text: 'Chào cô ạ.', sender: 'other', timestamp: '10:30' },
        { id: 'msg2', text: 'Chào chị, tôi đây. Chị cần tôi hỗ trợ gì không ạ?', sender: 'me', timestamp: '10:31' },
        { id: 'msg3', text: 'Chào cô, tôi muốn hỏi về tình hình học tập của cháu ạ, không biết dạo này cháu thế nào?', sender: 'other', timestamp: '10:45' }
      ]
    },
    {
      id: '2',
      userName: 'Tổ chuyên môn Lý',
      userRole: 'Nhóm',
      avatar: require('../images/school1.png'),
      lastMessage: 'Cuộc họp tổ sẽ diễn ra vào 15:00 chiều nay nhé.',
      timestamp: '09:12',
      unreadCount: 0,
      isOnline: false,
      messages: [
         { id: 'msg1', text: 'Cuộc họp tổ sẽ diễn ra vào 15:00 chiều nay nhé.', sender: 'other', timestamp: '09:12' },
      ]
    },
    {
      id: '3',
      userName: 'Em Bảo Hân (11A2)',
      userRole: 'Học sinh',
      avatar: require('../images/teacher2.png'),
      lastMessage: 'Dạ em cảm ơn cô nhiều ạ!',
      timestamp: 'Hôm qua',
      unreadCount: 0,
      isOnline: false,
      lastSeen: 'hoạt động hôm qua',
      messages: [
         { id: 'msg1', text: 'Dạ em cảm ơn cô nhiều ạ!', sender: 'other', timestamp: 'Hôm qua' },
      ]
    },
    {
        id: '4',
        userName: 'Hội đồng nhà trường',
        userRole: 'Thông báo',
        avatar: require('../images/logo.png'),
        lastMessage: '[THÔNG BÁO] Lịch nghỉ lễ 30/4-1/5.',
        timestamp: 'Thứ Sáu',
        unreadCount: 1,
        isOnline: true,
         messages: [
         { id: 'msg1', text: '[THÔNG BÁO] Lịch nghỉ lễ 30/4-1/5.', sender: 'other', timestamp: 'Thứ Sáu' },
      ]
    },
    {
        id: '5',
        userName: 'Cô Thuỷ (GV Toán)',
        userRole: 'Đồng nghiệp',
        avatar: require('../images/teacher3.png'),
        lastMessage: 'Mình gửi bạn file đề thi tham khảo nhé.',
        timestamp: 'Thứ Năm',
        unreadCount: 0,
        isOnline: false,
        lastSeen: 'hoạt động 2 ngày trước',
        messages: [
         { id: 'msg1', text: 'Mình gửi bạn file đề thi tham khảo nhé.', sender: 'other', timestamp: 'Thứ Năm' },
      ]
    },
     {
      id: '6',
      userName: 'Phụ huynh Gia Bảo',
      userRole: 'Phụ huynh',
      avatar: require('../images/teacher4.png'),
      lastMessage: 'Ok cô, tôi đã nhận được thông tin.',
      timestamp: '15/04/2024',
      unreadCount: 0,
      isOnline: false,
      messages: [
        { id: 'msg1', text: 'Ok cô, tôi đã nhận được thông tin.', sender: 'other', timestamp: '15/04/2024' },
      ]
    },
]; 