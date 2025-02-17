interface CommentData{
    id: number;
    name: string;
    avatar: string;
    date: string;
    readTime: string;
    rating: number;
    content: string;   
}

export const dummyData: CommentData[] = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      date: "15 Şub 2024",
      readTime: "5 dk okuma",
      rating: 4.5,
      content: "Yemekler çok lezzetliydi. Özellikle köfteli spagetti muhteşemdi. Servis hızlı ve personel çok ilgiliydi."
    },
    {
      id: 2,
      name: "Mehmet Demir",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      date: "14 Şub 2024",
      readTime: "3 dk okuma",
      rating: 5.0,
      content: "Kahvaltı menüsü çok zengin ve taze. Özellikle simit kahvaltısı favorim oldu. Kesinlikle tavsiye ederim."
    },
    {
      id: 3,
      name: "Zeynep Kaya",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "13 Şub 2024",
      readTime: "7 dk okuma",
      rating: 4.0,
      content: "Serpme kahvaltı için gittik ve çok memnun kaldık. Her şey tazeydi ve lezzetliydi. Tekrar geleceğiz."
    },
    {
      id: 4,
      name: "Ahmet Şahin",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      date: "12 Şub 2024",
      readTime: "4 dk okuma",
      rating: 4.8,
      content: "İtalyan köfte gerçekten harika! Soslar ev yapımı ve çok lezzetli. Personel çok nazik ve ilgili."
    },
    {
      id: 5,
      name: "Elif Öztürk",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      date: "11 Şub 2024",
      readTime: "6 dk okuma",
      rating: 4.2,
      content: "Soğuk kahve çok güzel hazırlanmış. Tatlılar da bir harika. Ambiyans çok rahat ve ferah."
    },
    {
      id: 6,
      name: "Mustafa Çelik",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      date: "10 Şub 2024",
      readTime: "8 dk okuma",
      rating: 4.7,
      content: "Türk kahvaltısı tam anlamıyla mükemmel! Özellikle menemen ve gözleme favorilerim oldu."
    },
    {
      id: 7,
      name: "Selin Arslan",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      date: "9 Şub 2024",
      readTime: "5 dk okuma",
      rating: 4.4,
      content: "Fiyat/performans açısından çok iyi. Porsiyonlar doyurucu ve lezzetli. Kesinlikle tavsiye ederim."
    },
    {
      id: 8,
      name: "Can Yıldız",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      date: "8 Şub 2024",
      readTime: "4 dk okuma",
      rating: 4.9,
      content: "Hızlı servis ve kaliteli yemekler. Öğle yemeği için ideal bir mekan. Tekrar geleceğim."
    },
    {
      id: 9,
      name: "Deniz Aydın",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      date: "7 Şub 2024",
      readTime: "6 dk okuma",
      rating: 4.3,
      content: "Kahve çeşitleri çok güzel. Özellikle tatlılarla beraber harika gidiyor. Personel çok ilgili."
    },
    {
      id: 10,
      name: "Burak Koç",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      date: "6 Şub 2024",
      readTime: "7 dk okuma",
      rating: 4.6,
      content: "Akşam yemeği için gittik ve çok memnun kaldık. Atmosfer çok güzel, yemekler lezzetli."
    }
  ];