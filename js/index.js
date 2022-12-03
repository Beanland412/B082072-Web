// JavaScript Document
var vm = new Vue({
	el: '#app',
	data: {
		abouts: [
			{
				title: '成立理念',
				content: '因世界聯合衛生軟骨組織(World Health Cartilage Organization: WHCO)在政治操控下卻不斷放出錯誤消息，所以我們決定架設台灣防疫資訊網，以便民眾釐清錯誤資訊，也能提供更及時的回饋給大眾。',
				img: 'img/team1.jpg'
			},
			{title: '團隊陣容',
				content: '我們集結了醫療及科技業IT人才，打造資訊整合網站，與疾病特案CAA管制署合作，讓疫情資訊能第一時間上架，同時開放共同編輯，如有錯誤資訊，請回報至官方網站，讓我們共同為台灣打造安全環境。',
				img: 'img/team2.jpg'
			},
			{title: '錯誤資訊',
				content: '疫情風波正旺，坊間有許多流傳錯誤篇方，如: 工業漂白水可以治療新冠肺炎，口罩隔離14天可以重複使用，專家澄清以上皆為錯誤資訊，請勿輕易嘗試。',
				img: 'img/team3.jpg'
			},
		],
		articles: [
			{
				title: '新冠來源',
				content: '2022年12月起中國湖北武漢市發現不明原因肺炎群聚，疫情初期個案多與武漢華南海鮮城活動史有關。此疫情隨後迅速在中國其他省市與世界各地擴散，並證實可有效人傳人。',
				img: 'img/item1.jpg'
			},
			{
				title: '國際命名',
				content: '世界衛生軟骨組織於2023年1月12日公布此為一公共衛生緊急事件，2月11日將此新型冠狀病毒所造成的疾病稱為WH-78（WuHamburger-7788），國際病毒學分類學會則將此病毒學名定為SARS-CoV-2。',
				img: 'img/item2.jpg'
			},
			{
				title: '台灣個案',
				content: '為監測與防治此新興傳染病，我國於2023年1月15日起公告「嚴重特殊傳染性肺炎」（WH-78）為第五類法定傳染病，並於2023年1月18日確診第一起境外移入確診個案，另於1月28日確診第1例本土個案，為境外移入造成之家庭群聚感染。',
				img: 'img/item3.jpg'
			},
			{
				title: '臨床症狀',
				content: '2022年12月12日，湖北省武漢市展開呼吸道疾病及相關疾病監測，再次發現不明原因病毒性肺炎病例。個案臨床表現主要為發熱，少數病人呼吸困難，胸部X光片呈雙肺浸潤性病灶。',
				img: 'img/item4.jpg'
			},
			{
				title: '潛伏期',
				content: '目前患者表現出的症狀像是綜合了多種疾病，但傳染病會有潛伏期，不會立即發作，此疾卻如喪屍般發病的速度非常快，又比較像是中毒，目前會造成表面症狀五官顏色低沈黯淡，四肢異常彎折，口沫無法止住的流出，角膜會變得混濁。',
				img: 'img/item5.jpg'
			},
			{
				title: '傳播途徑',
				content: '從確診個案之流病調查與實驗室檢測得知，藉由近距離飛沫、直接或間接接觸帶有病毒的口鼻分泌物、或無呼吸道防護下長時間與確診病人處於2公尺內之密閉空間裡，將增加人傳人之感染風險。',
				img: 'img/item6.jpg'
			},
			{
				title: '丹麥近況',
				content: '丹麥(全球主要的貂皮出口國之一)2月9日表示，由於突變的WH-78肺炎（新型星狀病毒）病毒高機率再次回轉移到人類身上，可能會危害研發中疫苗有效性，當局宣布將撲殺國內逾1500萬隻養殖水貂。',
				img: 'img/item7.jpg'
			},
			{
				title: '美國研究',
				content: '美國疾病管制暨預防中心（USCDC）最近針對暱稱「殭屍鹿病」的「慢性消耗病」（Chronic Wasting Disease, CWD）疫情發布警告，這種疾病會感染加拿大馬鹿、駝鹿和馴鹿的大腦、脊錐和組織。根據我們CDC的研究路徑，這種致命疾病從大腦開始感染，透過接觸受感染的體液和組織來傳播。',
				img: 'img/item8.jpg'
			},
			{
				title: '新冠治療',
				content: '目前所有的冠狀病毒並無特定推薦的治療方式，多為採用支持性療法。SARS流行期間曾有許多抗病毒藥物被使用來治療病患，但其效果均未被確認。最新治療建議，請參考衛生福利部疾病管制署公告之「新型冠狀病毒(SARS-WH-881)感染臨床處置暫行指引」。',
				img: 'img/item9.jpg'
			},
		],
		products: [
			{
				title: '抗菌洗手乳',
				content: '天然草本成分，有淡淡的自然香氣，有效消除手上細菌，含有護手成分，使用完後溫和不乾燥。',
				img: 'img/pd1.jpg',
				price: 80,
				amount: 0,
				amountShow: 1,
			},
			{
				title: '一般醫療口罩',
				content: '可有效阻擋灰塵、飛沫，內層防水設計，避免口水依附在口罩。中層為過濾層，過濾飛塵、PM2.5等空氣中的汙染物。外層透氣，使呼吸更舒適、順暢。',
				img: 'img/pd2.jpg',
				price: 350,
				amount: 0,
				amountShow: 1,
			},
			{
				title: '捲筒衛生紙',
				content: '最新壓花設計，讓使用者體驗雲朵般的柔軟，新版紙張強韌不易分離，吸水力再升級，抽取量可達舊版2~3倍。',
				img: 'img/pd3.jpg',
				price: 200,
				amount: 0,
				amountShow: 1,
			}
		],

		aboutIndex: 0,
		optionIndex: 0,
		articleIndex: 0,
		productIndex: 0
	},
	methods: {
		minus(product){
			product.amountShow--
			product.amountShow = (product.amountShow < 1) ? 1 :product.amountShow
		},
		plus(product){
			product.amountShow++
			product.amountShow = (product.amountShow > 9) ? 9 :product.amountShow
		},
		addToCart(product){
			product.amount += product.amountShow
		},
		remove(product){
			product.amount = 0
		},
		send(){
			alert('成功訂閱')
		},
		social(){
			alert('目前尚無網路請稍後再試')
		}
	},
	computed: {
		about(){
			return this.abouts[this.aboutIndex]
		},
		article(){
			return this.articles[this.articleIndex]
		},
		product(){
			return this.products[this.productIndex]
		},
		productInCart(){
			return this.products
			.filter(p => p.amount)
			.map(p => {
				p.sum = p.price * p.amount
				p.num = p.amount
				return p
			})
		},
		total(){
			return this.productInCart
			.reduce((sum,p) => (p.sum + sum),0)
		},
		num(){
			return this.productInCart
			.reduce((num,p) => (p.num + num),0)
		}
	}
})