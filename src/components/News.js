import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  //  articles= [
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "BBC News"
  //       },
  //       "author": "https://www.facebook.com/bbcnews",
  //       "title": "Turkey earthquake: Heavy rain hampers rescue efforts - BBC",
  //       "description": "More than 4,800 people are confirmed dead in the quake that struck northern Syria and Turkey.",
  //       "url": "https://www.bbc.com/news/world-europe-64548985",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11A48/production/_128546227_womenre.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T07:46:03Z",
  //       "content": "Media caption, Turkey and Syria earthquake: Drone footage shows Turkey earthquake aftermath\r\nRescuers are battling heavy rain and snow as they race against the clock to find survivors of a devastatin… [+4993 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "reuters",
  //           "name": "Reuters"
  //       },
  //       "author": null,
  //       "title": "Russian reinforcements pour into eastern Ukraine, says governor - Reuters",
  //       "description": "Ukraine said on Tuesday the last 24 hours were the deadliest of the war so far for Russian troops, as Moscow hurls tens of thousands of freshly mobilised soldiers and mercenaries into relentless winter assaults in the east.",
  //       "url": "https://www.reuters.com/world/europe/zelenskiy-vows-changes-will-bolster-ukraine-amid-defence-minister-uncertainty-this.props.pageSize23-02-06/",
  //       "urlToImage": "https://www.reuters.com/resizer/ZNM-lFXsdmvWqBT3cDbyD71SCGo=/1this.props.pageSize0x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TOY7MOYGUBKCZOOEUUK7WNABJE.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T07:18:00Z",
  //       "content": "KYIV, Feb 7 (Reuters) - Ukraine said on Tuesday the last 24 hours were the deadliest of the war so far for Russian troops, as Moscow hurls tens of thousands of freshly mobilised soldiers and mercenar… [+4586 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CBS Sports"
  //       },
  //       "author": "",
  //       "title": "NBA trade rumors: Nets, Mavericks make Kyrie Irving trade official; Heat open to moving Kyle Lowry - CBS Sports",
  //       "description": "The first NBA blockbuster went down Sunday; what other moves will we see this week?",
  //       "url": "https://www.cbssports.com/nba/news/nba-trade-rumors-nets-mavericks-make-kyrie-irving-trade-official-heat-open-to-moving-kyle-lowry/",
  //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/this.props.pageSize23/02/04/bec5d3cc-501a-47cc-a378-75ceb4a64c27/thumbnail/1this.props.pageSize0x675/8b74c850f0beaf39495119c831f780dc/untitled-design-this.props.pageSize23-02-04t104this.props.pageSize7-968.png",
  //       "publishedAt": "this.props.pageSize23-02-07T06:48:00Z",
  //       "content": "The this.props.pageSize23 NBA trade deadline is rapidly approaching. Teams now have three days to finalize their remaining business before the trade market is closed for the season at 3 p.m. ET on Thursday, Feb. 9. S… [+7637 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "financial-times",
  //           "name": "Financial Times"
  //       },
  //       "author": "George Russell, William Langley",
  //       "title": "Live news: Japanese workers' nominal wages grow at fastest pace in 26 years - Financial Times",
  //       "description": "",
  //       "url": "https://www.ft.com/content/ab3575d1-1d71-4eb5-9717-ac94c680efa5",
  //       "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F05a9ba63-3d71-46ae-a981-926869ab05c3.jpg?source=next-opengraph&fit=scale-down&width=900",
  //       "publishedAt": "this.props.pageSize23-02-07T06:29:11Z",
  //       "content": "SoftBank has reported a quarterly investment loss of $5.5bn as the technology conglomerate cuts back on pouring money into start-ups to navigate a global tech rout and higher borrowing costs.\r\nIn rec… [+1553 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Variety"
  //       },
  //       "author": "J. Kim Murphy",
  //       "title": "‘Ant-Man and the Wasp: Quantumania’ First Reactions Highlight Jonathan Majors’ ‘Incredible’ and ‘Badass’ Kang the Conqueror - Variety",
  //       "description": "The Marvel Cinematic Universe kicks off its next series of entries, dubbed Phase Five, with the upcoming Feb. 17 release of “Ant-Man and the Wasp: Quantumania.” It’s curtains for …",
  //       "url": "https://variety.com/this.props.pageSize23/film/news/ant-man-and-the-wasp-quantumania-first-reactions-jonathan-majors-1235514409/",
  //       "urlToImage": "https://variety.com/wp-content/uploads/this.props.pageSize23/02/Screen-Shot-this.props.pageSize23-02-06-at-12.37.08-PM.png?w=1000&h=563&crop=1",
  //       "publishedAt": "this.props.pageSize23-02-07T06:02:00Z",
  //       "content": "The Marvel Cinematic Universe kicks off its next series of entries, dubbed Phase Five, with the upcoming Feb. 17 release of “Ant-Man and the Wasp: Quantumania.” It’s curtains for the film’s Monday ev… [+4476 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "independent",
  //           "name": "Independent"
  //       },
  //       "author": "Alex Woodward",
  //       "title": "George Santos – news: Republican’s office vandalised as congressman’s latest lies revealed - The Independent",
  //       "description": "Follow for updates on the latest lies and scandals swirling round the Republican congressman",
  //       "url": "https://www.independent.co.uk/news/world/americas/us-politics/george-santos-lies-real-name-sexual-harassment-spider-man-musical-b2277069.html",
  //       "urlToImage": "https://static.independent.co.uk/this.props.pageSize23/01/21/04/10401865.jpg?quality=75&width=1this.props.pageSize0&auto=webp",
  //       "publishedAt": "this.props.pageSize23-02-07T05:55:00Z",
  //       "content": "George Santos faces backlash on Twitter for weighing into Ilhan Omar vote after lies about 'Jew-ish' heritage\r\nGeorge Santos is facing backlash on Twitter for weighing in on the vote ousting Ilhan Om… [+1386 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Yahoo Entertainment"
  //       },
  //       "author": "Eliza Ronalds-Hannon and Jeannette Neumann",
  //       "title": "Bed Bath & Beyond Plans Share Sale in Bid to Avoid Bankruptcy - Yahoo Finance",
  //       "description": "(Bloomberg) -- Bed Bath & Beyond Inc. has lined up investors for an eleventh-hour cash infusion that would allow it to stave off a bankruptcy filing...",
  //       "url": "https://finance.yahoo.com/news/bed-bath-beyond-plans-share-2this.props.pageSize242769.html",
  //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/9QzJ_2FqBYwKs0e49vFR5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/bloomberg_markets_842/8e31830849cdb21b30cb68b85aabda8b",
  //       "publishedAt": "this.props.pageSize23-02-07T05:11:00Z",
  //       "content": "(Bloomberg) -- Bed Bath &amp; Beyond Inc. has lined up investors for an eleventh-hour cash infusion that would allow it to stave off a bankruptcy filing, according to people with knowledge of the mat… [+4287 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "cnn",
  //           "name": "CNN"
  //       },
  //       "author": "Katie Hunt",
  //       "title": "Neanderthals had a taste for a seafood delicacy that's still popular today - CNN",
  //       "description": "Neanderthals living 90,000 years ago in a seafront cave, in what's now Portugal, regularly caught crabs, roasted them on coals and ate the cooked flesh, according to a new study.",
  //       "url": "https://www.cnn.com/this.props.pageSize23/02/07/world/neanderthal-diet-crabs-scn/index.html",
  //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230this.props.pageSize6144059-neanderthal-diet-research-crab-remains-scn.jpg?c=16x9&q=w_800,c_fill",
  //       "publishedAt": "this.props.pageSize23-02-07T05:01:00Z",
  //       "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nNeanderthals living 90,000 years ago in a seafront cav… [+3this.props.pageSize2 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "polygon",
  //           "name": "Polygon"
  //       },
  //       "author": "Johnny Yu",
  //       "title": "Hogwarts Legacy account link rewards: a step-by-step guide - Polygon",
  //       "description": "Connect your Harry Potter Fan Club and WB Games accounts to receive cosmetics and your wand in Hogwarts Legacy. Make sure to link your accounts for a more personal experience.",
  //       "url": "https://www.polygon.com/hogwarts-legacy-guide/23587634/account-link-rewards-harry-potter-fan-club-wb-games-wizarding-world",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/6shFT2mg_SnyIYceu2Ma8Xj5G6A=/0x75:19this.props.pageSizex1080/fit-in/1this.props.pageSize0x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24412503/vlc_xqKksuxEas.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T05:00:00Z",
  //       "content": "Its worth linking your Harry Potter Fan Club and WB Games accounts for a more personalized Hogwarts Legacyexperience.\r\nThis involves a couple of quizzes to find which Hogwarts house you belong to and… [+3435 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "cbs-news",
  //           "name": "CBS News"
  //       },
  //       "author": "Ava-joye Burnett",
  //       "title": "'It would lay this city to waste:' Catonsville woman conspired with neo-Nazi leader to destroy Baltimore power grid, FBI says - CBS News",
  //       "description": "The FBI said it views the suspects as \"racially or ethnically motivated extremists.\"",
  //       "url": "https://www.cbsnews.com/baltimore/news/baltimore-power-grid-shooting-substations-sarah-clendaniel-fbi-charged/",
  //       "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/this.props.pageSize23/02/06/a8299d8e-0514-4b96-80f8-5c492d6037e2/thumbnail/1this.props.pageSize0x630/d4d9c726b7bcc1d12ae6c972f46bthis.props.pageSize09/vlcsnap-this.props.pageSize23-02-06-17h41m50s484.png",
  //       "publishedAt": "this.props.pageSize23-02-07T04:40:00Z",
  //       "content": "BALTIMORE -- A Catonsville woman and a Florida man with neo-Nazi ties have been arrested and charged with conspiring to attack Baltimore's power grid, the FBI and local officials announced Monday. \r\n… [+4717 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Yahoo Entertainment"
  //       },
  //       "author": "Jason Owens",
  //       "title": "Tom Brady gets emotional as Bill Belichick heaps praise on his former QB: 'The greatest ... it was incredible' - Yahoo Sports",
  //       "description": "Belichick joined his former quarterback on the first episode of Brady's podcast since he announced his retirement.",
  //       "url": "https://sports.yahoo.com/tom-brady-gets-emotional-as-bill-belichick-heaps-praise-on-his-former-qb-the-greatest--it-was-incredible-043621461.html",
  //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/9ect1Nyi00Lc_BdEMeW.HQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTU-/https://s.yimg.com/os/creatr-uploaded-images/this.props.pageSize23-01/7c028bc0-a68b-11ed-a475-3cdbb6fd0a59",
  //       "publishedAt": "this.props.pageSize23-02-07T04:36:00Z",
  //       "content": "Things got icy toward the end betweenTom Brady and Bill Belichick.\r\nNow that Brady says his career is over \"for good\" this time the two are looking back fondly on their days as quarterback and head c… [+3235 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Arrowhead Pride"
  //       },
  //       "author": "John Dixon",
  //       "title": "Chiefs appear at Super Bowl LVII Opening Night - Arrowhead Pride",
  //       "description": "We’re keeping you up to date with what’s happening as Kansas City meets with the press in Phoenix.",
  //       "url": "https://www.arrowheadpride.com/this.props.pageSize23/2/6/23588706/chiefs-appear-at-super-bowl-lvii-opening-night",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/5FeFHtuWW5Zr0SgtskD1sTebipc=/465x698:4808x2972/fit-in/1this.props.pageSize0x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24414603/1463628712.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T04:13:56Z",
  //       "content": "© this.props.pageSize23 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OH, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility … [+128 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "reuters",
  //           "name": "Reuters"
  //       },
  //       "author": null,
  //       "title": "Baidu to finish testing ChatGPT-style project 'Ernie Bot' in March - Reuters",
  //       "description": "China's Baidu Inc <a href=\"https://www.reuters.com/companies/9888.HK\" target=\"_blank\">(9888.HK)</a> said on Tuesday it would complete internal testing of a ChatGPT-style project called \"Ernie Bot\" in March, joining a global race as interest in generative arti…",
  //       "url": "https://www.reuters.com/technology/chinas-baidu-finish-testing-chatgpt-style-project-ernie-bot-march-this.props.pageSize23-02-07/",
  //       "urlToImage": "https://www.reuters.com/resizer/nI8VOBFmFlfjFIJOcQ_tKC0l4jo=/1this.props.pageSize0x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U6WCYQF7ENNHNJKJ2ZMM7GRFEQ.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T04:01:00Z",
  //       "content": "BEIJING, Feb 7 (Reuters) - China's Baidu Inc (9888.HK) said on Tuesday it would complete internal testing of a ChatGPT-style project called \"Ernie Bot\" in March, joining a global race as interest in … [+2616 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "associated-press",
  //           "name": "Associated Press"
  //       },
  //       "author": "Tara Copp",
  //       "title": "Intruder breaches base of Air Force One, shot fired - The Associated Press - en Español",
  //       "description": "WASHINGTON (AP) — Another intruder has breached the home of Air Force One, one of the nation's most sensitive military bases, and this time a resident opened fire on the trespasser, Joint Base Andrews said in a statement late Monday.",
  //       "url": "https://apnews.com/article/law-enforcement-e9bde5e95d0eb3000d33a3a62e292f42",
  //       "urlToImage": "https://storage.googleapis.com/afs-prod/media/16e8cd1f8this.props.pageSized45f8916dcf0db7ba88cd/3000.webp",
  //       "publishedAt": "this.props.pageSize23-02-07T03:52:28Z",
  //       "content": "WASHINGTON (AP) Another intruder has breached the home of Air Force One, one of the nations most sensitive military bases, and this time a resident opened fire on the trespasser, Joint Base Andrews s… [+1654 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "SciTechDaily"
  //       },
  //       "author": null,
  //       "title": "Groundbreaking Discovery of Hidden Molten Rock Layer Under Earth's Tectonic Plates - SciTechDaily",
  //       "description": "Scientists have discovered a new layer of partly molten rock under the Earth’s crust that might help settle a long-standing debate about how tectonic plates move. Researchers had previously identified patches of melt at a similar depth. But a new study led by…",
  //       "url": "https://scitechdaily.com/groundbreaking-discovery-of-hidden-molten-rock-layer-under-earths-tectonic-plates/",
  //       "urlToImage": "https://scitechdaily.com/images/Earths-Upper-Mantle.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T03:43:59Z",
  //       "content": "ByUniversity of Texas at AustinFebruary 6, this.props.pageSize23\r\nThe Earth with the upper mantle revealed. Researchers at The University of Texas at Austin have discovered a previously unknown layer of partly molten… [+4566 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CNBC"
  //       },
  //       "author": "Jihye Lee",
  //       "title": "Asia-Pacific markets rise ahead of Australia's rate decision; Wall Street extends losses - CNBC",
  //       "description": "Investors in the Asia-Pacific await the Reserve Bank of Australia's rate decision later in the day.",
  //       "url": "https://www.cnbc.com/this.props.pageSize23/02/07/asia-markets-reserve-bank-australia.html",
  //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107189785-1675727533919-gettyimages-1043773886-4042_14_am01692.jpeg?v=1675727856&w=19this.props.pageSize&h=1080",
  //       "publishedAt": "this.props.pageSize23-02-07T02:17:00Z",
  //       "content": "Treasury yields jumped on Monday as investors awaited clues from Federal Reserve speakers on the next steps for monetary policy.\r\nThe yield on the 1-year T-bill leapt as high as 4.841% Monday morning… [+665 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Fox Business"
  //       },
  //       "author": "Paul Best",
  //       "title": "SpaceX launches 9,000-pound satellite into orbit from Florida - Fox Business",
  //       "description": "SpaceX used their Falcon 9 rocket to launch a 9,000-pound satellite into orbit on Monday evening from Cape Canaveral Space Force Station in Florida.",
  //       "url": "https://www.foxbusiness.com/technology/spacex-launches-9000-pound-satellite-orbit-florida",
  //       "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/this.props.pageSize22/04/0/0/SpaceX-Falcon-9-Rocket.jpg?ve=1&tl=1",
  //       "publishedAt": "this.props.pageSize23-02-07T02:15:29Z",
  //       "content": "A SpaceX Falcon 9 rocket successfully launched a 9,000-pound satellite into orbit on Monday evening from Cape Canaveral Space Force Station in Florida.\r\nThe reusable rocket's first stage landed back … [+1241 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "cnn",
  //           "name": "CNN"
  //       },
  //       "author": "Zachary Cohen",
  //       "title": "Exclusive: US intel assessment documents Chinese spy balloon incident under Trump - CNN",
  //       "description": "A US military intelligence report from last year that focused on China's use of high-altitude balloons mentioned sightings in Hawaii and Florida during the Trump presidency, according to an excerpt of the report reviewed by CNN.",
  //       "url": "https://www.cnn.com/this.props.pageSize23/02/06/politics/military-intelligence-report-china-balloon-trump/index.html",
  //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2this.props.pageSize808101326-donald-trump-0806.jpg?c=16x9&q=w_800,c_fill",
  //       "publishedAt": "this.props.pageSize23-02-07T02:15:00Z",
  //       "content": "A US military intelligence report from last year that focused on Chinas use of high-altitude balloons mentioned sightings in Hawaii and Florida during the Trump presidency, according to an excerpt of… [+3410 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "fox-news",
  //           "name": "Fox News"
  //       },
  //       "author": "Scott Thompson",
  //       "title": "Broncos' Sean Payton bans personal coaches from locker room, including star QBs: 'That's foreign to me' - Fox News",
  //       "description": "Sean Payton's introduction as the Denver Broncos' new head coach has already brought change, as he said no personal coaches will be allowed on the premises, including Russell Wilson's.",
  //       "url": "https://www.foxnews.com/sports/broncos-sean-payton-bans-personal-coaches-locker-room-including-star-qbs-foreign",
  //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/this.props.pageSize23/02/sean-payton.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T01:44:00Z",
  //       "content": "New Denver Broncos head coach Sean Payton is already making some changes in the organization. \r\nThe Broncos introduced Payton on Monday, which meant fielding questions from the various Denver and nat… [+3421 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "YouTube"
  //       },
  //       "author": null,
  //       "title": "Documents: Concerns raised over alleged Richneck Elementary School shooter's behavior - 13News Now",
  //       "description": "New documents obtained by 13News Now detail more about what led to the January 6 shooting at Richneck Elementary School. Newport News Police say a 6-year-old...",
  //       "url": "https://www.youtube.com/watch?v=EMFG5DPX1Zk",
  //       "urlToImage": "https://i.ytimg.com/vi/EMFG5DPX1Zk/hqdefault.jpg",
  //       "publishedAt": "this.props.pageSize23-02-07T01:29:11Z",
  //       "content": null
  //   }
  // ]


  static defaultProps = {
    country: "in",
    pageSize: 6,
    caterogy: "technology",
  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    caterogy: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      //articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63272e03c7624d0482e61ca5085abf95&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })

  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63272e03c7624d0482e61ca5085abf95&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63272e03c7624d0482e61ca5085abf95&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" >NewsLive- Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {

            return <div className="col-md-4" key={element.url} >
              {/* key is used to fix the console error and to identify uniquely */}
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>


          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
            Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News