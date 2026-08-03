const posts = [
  /* 📸正方形 */

      {
    title: "Make omelet's Escape！",
    image: "img/omuniged.png",
    type: "square", 
    favorite: true,  
    tags: ["HO1", "2026-08"],
    character: "早乙女 桜姫",
    ho: "花が丘継続"
  },
  
      {
    title: "Make me cute!",
    image: "img/meked.png",
    type: "square", 
    favorite: true,  
    tags: ["HO1", "2026-08"],
    character: "早乙女 桜姫",
    ho: "花が丘継続"
  },
  
      {
    title: "Make omelet's Escape！",
    image: "img/meked.png",
    type: "square", 
    favorite: true,  
    tags: ["HO1", "2026-08"],
    character: "早乙女 桜姫",
    ho: "花が丘継続"
  },
  
    {
    title: "レプリカントの葬列",
    image: "img/repu.png",
    type: "square", 
    favorite: true,  
    tags: ["HO1", "2026-07"],
    character: "翅玄",
    ho: "HO1"
  },
  
  {
    title: "AreAy",
    image: "img/AreAy.jpg",
    type: "square",
    favorite: false,
    tags: ["HO4", "2026-07"],
    character: "フォルテ・シュテルン",
    ho: "HO4"
  },

    {
    title: "私立花ヶ丘高校秘密倶楽部",
    image: "img/hanagaoka.jpg",
    type: "square", 
    favorite: true,  
    tags: ["HO3", "2026-05.06"],
    character: "早乙女 桜姫",
    ho: "HO3"
  },

   {
    title: "fu・waft!",
    image: "img/fuwafuto.jpg",
    type: "square",
    favorite: true, 
    tags: ["継続", "2026-04"],
    character: "桜枝 花梛",
    ho: "さくしろ継続"
  },

   {
    title: "freak",
    image: "img/freak.jpg",
    type: "square",
    favorite: false,
    tags: ["HO1", "2026-04"],
    character: "森谷 輝政",
    ho: "HO1 犯罪研究家"
  },

   {
    title: "よむとてと",
    image: "img/yomutoteto.jpg",
    type: "square", 
    favorite: true, 
    tags: ["継続", "2026-03"],
    character: "彩橋 文花",
    ho: "星花継続"
  },

  {
    title: "アンドロイドは恋人たちの夢をみるか？",
    image: "img/adokoi.jpg",
    type: "square",
    favorite: false,
    tags: ["PC", "2026-02"],
    character: "赤寧 凜々花",
    ho: "PC"
  },

  {
    title: "ʀ.ɪ.ᴘ±³",
    image: "img/noukansi2.jpg",
    type: "square",
    favorite: false,
    tags: ["HO3", "KPC", "2026-02"],
    character: "納棺師",
    ho: "HO3 納棺師"
  },

  {
    title: "感染自罪のモンタージュ",
    image: "img/monta.jpg",
    type: "square",
    favorite: false,
    tags: ["PC", "2026-02"],
    character: "黒川 㐂誠",
    ho: "刑事"
  },

  {
    title: "メイフラワーの咲く森で",
    image: "img/meiflour.jpg",
    type: "square",
    favorite: false,
    tags: ["継続", "2026-02"],
    character: "Angelica",
    ho: "までいち継続"
  },

    {
    title: "さくらとしろがね",
    image: "img/sakusiro.jpg",
    type: "square", 
    favorite: true, 
    tags: ["HO1", "2026-02"],
    character: "桜枝 花梛",
    ho: "HO1"
  },

    {
    title: "カメリアは箱の中",
    image: "img/kamehakokpc.jpg",
    type: "square",
    favorite: false,
    tags: ["KPC", "2026-02"],
    character: "絵日傘 真珠",
    ho: "KPC"
  },


  ];

const list = document.getElementById("list");
const searchBox = document.getElementById("searchBox");
const tagButtons = document.getElementById("tagButtons");

/* 🧱カード */
function createCard(post) {
  const item = document.createElement("div");

  item.className = `item ${post.type}`;
  if (post.favorite) item.classList.add("favorite");

  item.innerHTML = `
    <img src="${post.image}">
    <div class="title">${post.title}</div>

    <div class="meta">
      ${post.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      <div>🎀 ${post.character ?? "未設定"}</div>
      <div>🤍 ${post.ho ?? "未設定"}</div>
    </div>
  `;

  return item;
}

/* 📌表示 */
function render(data = posts) {
  list.innerHTML = "";
  data.forEach(post => list.appendChild(createCard(post)));
}

/* 🏷タグ取得 */
function getAllTags() {
  const set = new Set();

  posts.forEach(p => {
    p.tags.forEach(t => {
      // 🌸YYYY-MMだけ抽出
      if (/^\d{4}-\d{2}$/.test(t)) {
        set.add(t);
      }
    });
  });

  return [...set];
}

/* 🔘タグボタン */
function renderTagButtons() {
  tagButtons.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.textContent = "全部";
  allBtn.onclick = () => render(posts);
  tagButtons.appendChild(allBtn);

  getAllTags().forEach(tag => {
    const btn = document.createElement("button");
    btn.textContent = tag;
    btn.onclick = () =>
      render(posts.filter(p => p.tags.includes(tag)));

    tagButtons.appendChild(btn);
  });
}

/* 🔍検索 */
searchBox.addEventListener("input", () => {
  const keyword = searchBox.value.toLowerCase();

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(keyword) ||
    post.character.toLowerCase().includes(keyword) ||
    post.ho.toLowerCase().includes(keyword) ||
    post.tags.some(tag => tag.toLowerCase().includes(keyword))
  );

  render(filtered);
});

/* 初期化 */
render();
renderTagButtons();

