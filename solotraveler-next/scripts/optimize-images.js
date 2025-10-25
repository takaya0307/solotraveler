const fs = require('fs');
const path = require('path');
const https = require('https');

// 画像のダウンロードと最適化
async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(outputPath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {}); // ファイルを削除
      console.error(`❌ Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

// 主要な画像URLのリスト
const imageUrls = [
  // ホームページ背景
  {
    url: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=1920&auto=format&fit=crop&q=80',
    filename: 'home-bg.jpg'
  },
  // 国詳細ページ背景
  {
    url: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1920&auto=format&fit=crop&q=80',
    filename: 'country-bg.jpg'
  },
  // オーストラリア
  {
    url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&auto=format&fit=crop&q=80',
    filename: 'australia-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80',
    filename: 'australia-beach.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&auto=format&fit=crop&q=80',
    filename: 'australia-cafe.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&auto=format&fit=crop&q=80',
    filename: 'australia-outdoor.jpg'
  },
  // ドイツ
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&auto=format&fit=crop&q=80',
    filename: 'germany-tech.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560929585-ba3c24ec6c44?w=1920&auto=format&fit=crop&q=80',
    filename: 'germany-culture.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?w=1920&auto=format&fit=crop&q=80',
    filename: 'germany-history.jpg'
  },
  // その他の主要画像
  {
    url: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=1920&auto=format&fit=crop&q=80',
    filename: 'airport.jpg'
  }
];

async function optimizeImages() {
  const publicDir = path.join(__dirname, '..', 'public', 'images');
  
  // imagesディレクトリを作成
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('🚀 Starting image optimization...');
  
  for (const image of imageUrls) {
    const outputPath = path.join(publicDir, image.filename);
    
    try {
      await downloadImage(image.url, outputPath);
    } catch (error) {
      console.error(`Failed to download ${image.filename}:`, error.message);
    }
  }
  
  console.log('✅ Image optimization completed!');
  console.log(`📁 Images saved to: ${publicDir}`);
}

// スクリプト実行
if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages, imageUrls };
