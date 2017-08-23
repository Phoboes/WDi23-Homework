
# CREATE MANUFACTURER
Manufacturer.create( name: "Honda", founded: "24 September 1948", description: "Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, aircraft, motorcycles, and power equipment.", image: "http://www.carlogos.org/logo/Honda-logo-1920x1080.png")
Manufacturer.create( name: "Toyota", founded: "August 28, 1937", description: "Toyota Motor Corporation (Japanese: トヨタ自動車株式会社 Hepburn: Toyota Jidōsha KK, IPA: [toꜜjota], English: /tɔɪˈoʊtə/) is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. In March 2014, Toyota's corporate structure consisted of 338,875 employees worldwide[4] and, as of October 2016, was the ninth-largest company in the world by revenue. As of 2016, Toyota is the world's largest automotive manufacturer. Toyota was the world's first automobile manufacturer to produce more than 10 million vehicles per year which it has done since 2012, when it also reported the production of its 200-millionth vehicle.[6] As of July 2014, Toyota was the largest listed company in Japan by market capitalization (worth more than twice as much as #2-ranked SoftBank) and by revenue.", image: "http://www.carlogos.org/logo/Toyota-logo-1989-2560x1440.png")

Manufacturer.all.each(&:save)
# CREATE CAR
Car.create( make: "Honda", model: "NSX", hp: 270, tq: 280, category: "Coupe", image: "https://images.honestjohn.co.uk/imagecache/file/width/640/media/5830946/Honda%20NSX%20(1).jpg", manufacturer_id: 1)
