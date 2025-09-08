"use client";
import React, { useEffect } from "react";
import styles from "./CityDetailModal.module.css";

interface City {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  imageUrl: string;
}

interface CityDetailModalProps {
  city: City | null;
  isOpen: boolean;
  onClose: () => void;
}

// 都市の特徴を取得する関数
const getCityFeature = (city: City): string => {
  const cityFeatures: { [key: string]: string } = {
    // カナダ
    'toronto': 'カナダ最大の国際都市',
    'montreal': 'フランス文化が色濃く残る街',
    'vancouver': '自然と都市が調和した西海岸の大都市',
    'ottawa': 'カナダの首都・政治の中心地',
    'calgary': 'ロッキー山脈の玄関口',
    'halifax': '大西洋に面した歴史ある港町',
    'victoria': '花と港の美しい街',
    'whistler': '世界クラスのスキーリゾート',
    'kelowna': 'ワインと湖のリゾート都市',
    
    // オーストラリア
    'sydney': 'オーストラリア最大の都市',
    'melbourne': '世界で最も住みやすい街の一つ',
    'brisbane': '温暖な気候の東部都市',
    'perth': '西オーストラリアの中心都市',
    'cairns': 'グレートバリアリーフの玄関口',
    'goldcoast': 'サーフィンとビーチリゾートの街',
    
    // ニュージーランド
    'auckland': 'ニュージーランド最大の都市',
    'christchurch': 'ガーデンシティとして知られる街',
    'wellington': 'ニュージーランドの首都',
    'queenstown': 'アドベンチャースポーツの聖地',
    'rotorua': '温泉とマオリ文化の街',
    'nelson': 'アートと自然が融合した港町',
    
    // イギリス
    'london': 'イギリスの首都・世界的大都市',
    'manchester': '音楽とサッカーの街',
    'edinburgh': 'スコットランドの首都',
    'liverpool': 'ビートルズの故郷',
    'bristol': '芸術と音楽の港町',
    'birmingham': 'イギリス第2の都市',
    'glasgow': 'スコットランド最大の都市',
    
    // アイルランド
    'dublin': 'アイルランドの首都',
    'cork': '南部の美食とアートの街',
    'galway': '西部の文化都市',
    'limerick': '歴史ある城と近代都市が融合した街',
    
    // フランス
    'paris': 'フランスの首都・芸術の都',
    'lyon': '美食の都として世界的に有名',
    'marseille': '地中海沿いの港町',
    'bordeaux': 'ワインの名産地',
    'toulouse': '航空宇宙産業の中心地',
    'nice': 'コートダジュールのリゾート都市',
    
    // ドイツ
    'berlin': 'ドイツの首都・創造性の街',
    'munich': 'バイエルン州の州都',
    'frankfurt': 'ドイツの金融・経済の中心地',
    'hamburg': '北ドイツ最大の港町',
    'dusseldorf': 'ライン川沿いの経済都市',
    'cologne': '2000年の歴史を持つ古都',
    'leipzig': '音楽の街として世界的に有名',
    'stuttgart': '自動車産業の中心地',
    
    // スペイン
    'barcelona': 'カタルーニャ地方の中心都市',
    'madrid': 'スペインの首都・芸術の都',
    'valencia': 'パエリア発祥の地',
    'sevilla': 'フラメンコと歴史の街',
    'malaga': 'ピカソ生誕の地',
    
    // イタリア
    'rome': 'イタリアの首都・永遠の都',
    'milan': 'イタリアの経済・ファッションの中心地',
    'florence': 'ルネサンス発祥の地',
    'venice': 'アドリア海に浮かぶ水の都',
    'naples': 'ピザ発祥の地',
    'bologna': 'ヨーロッパ最古の大学都市',
    
    // その他の国々
    'lisbon': '大航海時代の栄光と陽光あふれる首都',
    'porto': 'ポートワインと歴史的街並みの街',
    'faro': 'アルガルヴェ地方の玄関口',
    'vienna': '音楽と芸術が息づくヨーロッパの都',
    'salzburg': 'モーツァルト生誕の街とアルプスの景観',
    'innsbruck': 'アルプスの玄関口とウィンタースポーツの中心地',
    'oslo': '北欧の自然と文化が融合する首都',
    'bergen': 'フィヨルド観光の玄関口',
    'trondheim': '中世の歴史と学問の街',
    'copenhagen': '北欧デザインと美食の首都',
    'aarhus': 'デンマークの文化と芸術の中心地',
    'odense': '童話作家アンデルセンの故郷',
    'warsaw': 'ポーランドの歴史と再生の首都',
    'krakow': '中世の面影を残す文化と学問の都',
    'gdansk': 'バルト海に開かれた港町の玄関口',
    'prague': '百塔の街と呼ばれる歴史と文化の都',
    'brno': 'モラヴィア地方の心臓部、学術と産業の拠点',
    'olomouc': '歴史薫る芸術と宗教の街',
    'budapest': 'ドナウの真珠と温泉の都',
    'szeged': '太陽と芸術の街',
    'debrecen': '大平原に広がる大学と文化の中心',
    'bratislava': 'ドナウ川沿いの首都',
    'kosice': '東スロバキアの文化都市',
    'reykjavik': '世界最北の首都',
    'akureyri': '北アイスランドの玄関口',
    'seoul': '韓国の政治・経済・文化の中心地',
    'busan': '韓国最大の港湾都市と観光地',
    'daegu': '繊維産業と伝統文化の街',
    'daejeon': '科学と教育のハブ都市',
    'gwangju': '芸術と民主化運動の象徴',
    'taipei': '台湾の政治・経済・文化の中心地',
    'kaohsiung': '南台湾の港湾都市と産業拠点',
    'taichung': '台湾中部の商業と文化のハブ',
    'tainan': '台湾最古の都市と伝統文化の宝庫',
    'hualien': '自然と絶景の観光地',
    'hongkong': 'アジアを代表する国際都市',
    'buenosaires': '南米のパリと呼ばれる情熱の首都',
    'cordoba': '大学と植民地時代の歴史が息づく街',
    'rosario': '芸術と産業の中心地',
    'santiago': 'アンデス山脈に抱かれた首都',
    'valparaiso': '色彩豊かな港町',
    'vinadelmar': 'ビーチと音楽フェスの街',
    'tallinn': '中世の街並みが残る首都',
    'tartu': '学問と文化の中心地',
    'vilnius': 'バロック建築が彩る歴史都市',
    'kaunas': '文化と教育の中心地',
    'stockholm': '北欧の美しい水の都',
    'gothenburg': 'スウェーデン最大の港湾都市',
    'malmo': '国際色豊かな南スウェーデンの玄関口',
    'amsterdam': '運河と自由な文化の首都',
    'rotterdam': '近代建築と欧州最大の港町',
    'utrecht': '歴史と学生の街',
    'helsinki': '北欧デザインと文化の中心',
    'tampere': '湖と工業の街',
    'turku': 'フィンランド最古の都市',
    'riga': 'バルト三国の文化と経済の中心',
    'daugavpils': 'ラトビア南東部の歴史都市',
    'montevideo': '文化と歴史の港町',
    'punta': '南米屈指のビーチリゾート',
    'luxembourgcity': 'ヨーロッパの金融と外交のハブ'
  };
  
  return cityFeatures[city.id] || '美しい街';
};

export default function CityDetailModal({ city, isOpen, onClose }: CityDetailModalProps) {
  // モーダルが開いている時に背景のスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      // 現在のスクロール位置を保存
      const scrollY = window.scrollY;
      
      // bodyを固定位置にしてスクロールを防ぐ
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // スクロール位置を復元
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      
      // 保存されたスクロール位置に戻す
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', ''), 10));
      }
    }

    // クリーンアップ
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !city) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* 閉じるボタン */}
        <button className={styles.closeButton} onClick={onClose} aria-label="閉じる">
          <span className={styles.closeIcon}>×</span>
        </button>

        {/* 都市画像 */}
        <div 
          className={styles.cityImage}
          style={{
            background: `url('${city.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* 都市情報 */}
        <div className={styles.cityInfo}>
          <h2 className={styles.cityName}>
            <div>{city.nameJa}</div>
            <div className={styles.cityNameEn}>({city.name})</div>
          </h2>
          
          <div className={styles.cityFeature}>
            {getCityFeature(city)}
          </div>
          
          <p className={styles.cityDescription}>
            {city.description}
          </p>
        </div>
      </div>
    </div>
  );
}
