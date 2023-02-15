import {
    AdCenterColorIcon,
    AdwordsColorIcon,
    ChartColorIcon,
    DonateColorIcon,
    EventColorIcon,
    FeelColorIcon,
    FriendsColorIcon,
    GameColorIcon,
    GroupColorIcon,
    LiveColorIcon,
    MarketColorIcon,
    MessengerKidColorIcon,
    MostRecentColorIcon,
    NewFeedsColorIcon,
    PagesColorIcon,
    PlayGameColorIcon,
    SavedColorIcon,
    ScienceColorIcon,
    SosColorIcon,
    StartColorIcon,
    StoryColorIcon,
    WatchColorIcon,
} from '~/Asset/IconColor';
import {
    AdwordsIconOCL,
    CartIconOCL,
    EventIconOCL,
    GroupIconOCL,
    PageIconOCL,
    StoryIconOCL,
    ToPostIconOCL,
    ZoomIconOCL,
} from '~/Asset/Menu';

export const MainMenuFeaterUser = () => {
    return [
        {
            title: 'Xã hội',
            children: [
                {
                    title: 'Sự kiện',
                    detail: 'Tổ chức hoặc tìm sự kiện cũng những hoạt động khác trên mạng và ở quanh đây',
                    icon: <EventColorIcon />,
                },
                {
                    title: 'Bạn bè',
                    detail: 'Tìm kiếm bạn bè hoặc những người có thể biết',
                    icon: <FriendsColorIcon />,
                },
                {
                    title: 'Nhóm',
                    detail: 'Kết nối với những người chung sở thích',
                    icon: <GroupColorIcon />,
                },
                {
                    title: 'Bảng tin',
                    detail: 'Xem bài viết phù hợp của những người và Trang bạn theo dõi',
                    icon: <NewFeedsColorIcon />,
                },
                {
                    title: 'Yêu thích',
                    detail: 'View posts by Favorites',
                    icon: <StartColorIcon />,
                },
                {
                    title: 'Gần đây nhất',
                    detail: 'Xem bài viết gần nhất từ bạn bè, nhóm, Trang và hơn thế nữa',
                    icon: <MostRecentColorIcon />,
                },
                {
                    title: 'Trang',
                    detail: 'Khám phá và kết nôi với các doanh nghiệp trên Facebook',
                    icon: <PagesColorIcon />,
                },
            ],
        },
        {
            title: 'Giải trí',
            children: [
                {
                    title: 'Video chơi game',
                    detail: 'Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích',
                    icon: <GameColorIcon />,
                },
                {
                    title: 'Chơi game',
                    detail: 'Chơi game bạn yêu thích',
                    icon: <PlayGameColorIcon />,
                },
                {
                    title: 'Watch',
                    detail: 'Đích đến của video phù hợp vơi sở thích và quan hệ kết nối của bạn',
                    icon: <WatchColorIcon />,
                },
                {
                    title: 'Video trực tiếp',
                    detail: 'Xem video trực tiếp phổ biến từ khắp thế giới',
                    icon: <LiveColorIcon />,
                },
            ],
        },
        {
            title: 'Mua sắm',
            children: [
                {
                    title: 'Đơn đặt hàng và thanh toán',
                    detail: 'Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng',
                    icon: <ScienceColorIcon />,
                },
                {
                    title: 'Marketplace',
                    detail: 'Mua bán trong cộng đồng của bạn',
                    icon: <MarketColorIcon />,
                },
            ],
        },
        {
            title: 'Cá nhân',
            children: [
                {
                    title: 'Hoạt động quảng cáo gần đây',
                    detail: 'Xem toàn bộ quảng cáo mà bạn đã tương tác trên Facebook',
                    icon: <AdwordsColorIcon />,
                },
                {
                    title: 'Kỷ niệm',
                    detail: 'Lướt xem ảnh, video và bài viết cũ của bạn trên Facebook',
                    icon: <StoryColorIcon />,
                },
                {
                    title: 'Đã lưu',
                    detail: 'Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau.',
                    icon: <SavedColorIcon />,
                },
            ],
        },
        {
            title: 'Chuyên nghiệp',
            children: [
                {
                    title: 'Trình quản lý quảng cáo',
                    detail: 'Tạo, quản lý và theo dõi hiệu quả quảng cáo',
                    icon: <ChartColorIcon />,
                },
                {
                    title: 'Trung tâm quảng cáo',
                    detail: 'Dùng các tính năng đơn giản hơn để quản lý mọi quảng cáo bạn tạo trên Trang',
                    icon: <AdCenterColorIcon />,
                },
            ],
        },
        {
            title: 'Nguồn lực cho cộng đồng',
            children: [
                {
                    title: 'Trung tâm khoa học khí hậu',
                    detail: 'Tìm hiểu về vấn đề biến đổi khí hậu và tác động của các hiện tượng này',
                    icon: <ScienceColorIcon />,
                },
                {
                    title: 'Ứng phó khẩn cấp',
                    detail: 'Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra trên thế giới',
                    icon: <SosColorIcon />,
                },
                {
                    title: 'Sức khoẻ và cảm xúc',
                    icon: <FeelColorIcon />,
                },
                {
                    title: 'Chiến dịch gây quỹ',
                    detail: 'Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân',
                    icon: <DonateColorIcon />,
                },
            ],
        },
        {
            title: 'Sản phẩm khác của Meta',
            children: [
                {
                    title: 'Messenger nhí',
                    detail: 'Cho phép bé nhắn tin với bạn thân và gia đình',
                    icon: <MessengerKidColorIcon />,
                },
            ],
        },
    ];
};

export const MenuCreate = () => {
    return [
        {
            children: [
                {
                    title: 'Đăng',
                    icon: <ToPostIconOCL />,
                },
                {
                    title: 'Tin',
                    icon: <StoryIconOCL />,
                },
                {
                    title: 'Phòng họp mặt',
                    icon: <ZoomIconOCL />,
                },
            ],
        },
        {
            children: [
                {
                    title: 'Trang',
                    icon: <PageIconOCL />,
                },
                {
                    title: 'Quảng cáo',
                    icon: <AdwordsIconOCL />,
                },
                {
                    title: 'Nhóm',
                    icon: <GroupIconOCL />,
                },
                {
                    title: 'Sự kiện',
                    icon: <EventIconOCL />,
                },
                {
                    title: 'Bài niêm yết trên Marketplace',
                    icon: <CartIconOCL />,
                },
            ],
        },
    ];
};
