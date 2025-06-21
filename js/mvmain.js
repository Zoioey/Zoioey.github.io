document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const movieList = document.getElementById('movieList');

    // 模拟影视数据
    const movies = [
        { title: '肖申克的救赎', year: 1994 , comment: 'never give up pusuing for freedom no matter what trouble you have met.' , intrduc: '在美国缅因州肖申克监狱，银行家安迪·杜佛兰被错误地判处两次无期徒刑，入狱后他结识了狱友瑞德，并在监狱中度过了近20年。安迪用自己的智慧和毅力，帮助监狱改善了生活条件，并最终成功逃脱。' },
        { title: '千与千寻', year: 2001 , comment: '本人第一部完整看完的宫崎骏作品。在整个故事中，千寻始终不曾超越这个小镇的规则，而是处于规则之下，依然勇敢率真地活着。也恰恰是这份真，使她不至于迷失自我，并最终拯救了朋友。最后，白龙太帅了！', intrduc:'千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人......'},
        { title: '起风了', year: 2013 , comment: '"起风了，就要努力奔跑。"' , intrduc: '恐怖的关东大地震，二郎邂逅一生的挂念——里见菜穗子，短暂的相逢，无序的混乱中又失之交臂。在命运的指引下，被称为天才的二郎如愿成为飞机设计师，他和前辈同侪共同努力，绞尽脑汁提升飞机的性能。欧洲的先进设计让他们痛心疾首，另一方面又充满矛盾的打造着融合了梦想和杀人属性的机器。他追逐梦想，并与菜穗子重逢。动荡的昭和时代，风雪飘摇之中步伐从未停止……' },
        { title: '天空之城', year: 1986 , comment: '看了影评之后，觉得本人非常有必要再看一次，因为我已经完全忘记当时的感受了。' , intrduc: '在一个神秘的天空之城中，少女希达和少年巴斯克相遇，他们一起踏上了寻找天空之城的冒险旅程。在旅途中，他们遭遇了邪恶的军队和神秘的力量，最终揭开了天空之城的秘密。' },
        { title: '龙猫', year: 1988 , comment: '通过这部作品第一次认识了宫崎骏。没有伟大叙事，家人间的心心相惜，孩童对自然的好奇。细小又美好。' , intrduc: '在日本的乡村，两个小女孩小梅和小月与父亲一起搬到新家。她们在新家附近的森林中遇到了神秘的生物——龙猫。龙猫带领她们经历了一系列奇妙的冒险，帮助她们克服生活中的困难。' },
        { title: '魔女宅急便', year: 1989 , comment: '是一个小魔女的成长故事。飞行途中的风雨、少女微妙的心思、森林中的邂逅、祖孙之间的隔膜……' , intrduc: '小魔女琪琪在13岁时离开家乡，独自前往一个陌生的城市。她用自己的魔法能力开了一家送货服务，但在城市中遇到了许多挑战和困难。通过努力和坚持，她逐渐找到了自己的位置，并结交了许多朋友。' },
        { title: '绿皮书', year: 2018 , comment: '关于种族、阶层、社会偏见的，两人在一趟路程中交心的故事。', intrduc: '故事发生在1960年代的美国，讲述了一位意大利裔美国人托尼·利普和非洲裔钢琴家唐·雪利之间的友谊。两人在一次巡演中结伴而行，面对种族歧视和社会偏见，他们逐渐建立起深厚的友谊。' },
        { title: '绝代商骄', year: 2018 , comment: '商业奇才阿爽，霸气侧漏的淼淼。破碎的麦提爽遇上善良的林淼淼，精彩哦。' , intrduc: '麦提爽自小有商业头脑，发奋读书凭努力于美国史丹福完成MBA课程，与何问天成为合伙人，亦师亦友合作无间，成为美国商界叱咤风云的狙击手。但后因分歧导致问天醉酒驾驶跌入海中，事后，提爽黯然退出商界。但知问天的妻子佘慕莲因而负债累累后决定回港照顾她。巧遇商界二世祖唐吉，逐为他打工赚取报酬代慕莲还债。但他爱耍个性拒做上班族，导致收入不稳，日夜遭财务公司收帐员林淼淼死缠烂打，两人尔虞我诈，你追我跑，遂成一对欢喜冤家。' },
        { title: '蜘蛛侠之纵横宇宙', year: 2023 , comment: '每一个宇宙中，失去至亲正是所有蜘蛛侠的可悲宿命……' , intrduc: '地球-65，蜘蛛女格温因为好友彼特之死而充满愧疚，而父亲对蜘蛛侠的误解也让她倍感焦虑。某次行动中，格温结识了来自其他宇宙的同伴米圭尔·奥哈拉和杰西卡·德鲁。从他们口中得知，为了防止多元宇宙进一步崩坏，米圭尔策划成立了由蜘蛛侠中的精英组成的突击队。格温受邀加入他们，并利用时空穿梭的机会来到了地球-1610，见到久违的迈尔斯。此时的迈尔斯和父母关系紧张，他憧憬格温，渴望加入突击队又遭到拒绝。' },
    ];

    // 渲染所有电影
    function renderMovies(movies) {
        movieList.innerHTML = '';
        if (movies.length === 0) {
            movieList.innerHTML = '<p>没有找到相关电影。</p>';
            return;
        }
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <div class="movie-content">
                <div class="flip-card">
                 <div class="card-inner">
                    <div class="card-front"> 
                        <img src="img/${movie.title}.jpg" alt="${movie.title}" onerror="this.style.display='none'">
                    </div>
                    <div class="card-back">
                        <p>${movie.intrduc}</p>
                    </div>
                 </div>
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>年份: ${movie.year}</p>
                    <p>我说: ${movie.comment}</p>
                </div>
            </div>
        `;
        //     movieCard.innerHTML = `
        //     <div class="movie-content">
        //         <div class="movie-card">
        //           <div class="card-inner">
        //             <div class="card-front">
        //               <img src="img/${movie.title}.jpg" alt="电影封面">
        //             </div>
        //             <div class="card-back">
        //               <p>${movie.intrd}</p>
        //             </div>
        //           </div>
        //         </div>
        //         <div class="movie-info">
        //             <h3>${movie.title}</h3>
        //             <p>年份: ${movie.year}</p>
        //             <p>我说: ${movie.comment}</p>
        //         </div>
        //     </div>
        // `;
            movieList.appendChild(movieCard);
        });
    }

    // 初始化渲染所有电影
    renderMovies(movies);

    // 搜索事件监听
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(query)
        );
        renderMovies(filteredMovies);
    });
});