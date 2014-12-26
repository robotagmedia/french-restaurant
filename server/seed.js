var Category = require('./data_modules/categories/model');
var Collection = require('./data_modules/collections/model');
var Item = require('./data_modules/items/model');

var seed = {
	categories: [
		{ name: 'women', slides: 6, collections: [
			{ name: 'outer', jp: 'アウター', collections: [
				{ name: 'outer', jp: 'アウター', items: [
					{ name: 'ＷＯＭＥＮ　ウルトラライトダウンショールカラーコート', price: '6,990', rating: '90', thumb: '3.jpg', imgs: 8 },
					{ name: 'ＷＯＭＥＮ　ウルトラライトダウンフーデットコート', price: '6,990', rating: '90', thumb: '3.jpg', imgs: 9 },
					{ name: 'ＷＯＭＥＮ　ウルトラライトダウンショールカラーコート（柄）＋', price: '6,990', rating: '98', thumb: '3.jpg', imgs: 8 }
				]},
				{ name: 'jacket', jp: 'ジャケット', items: [
					{ name: 'ＷＯＭＥＮ　デニムワークジャケット＋Ｅ', price: '5,990', rating: '80', thumb: '2.jpg', imgs: 7 },
					{ name: 'ＷＯＭＥＮ　ソフトジャージージャケット', price: '3,990', rating: '80', thumb: '2.jpg', imgs: 6 },
					{ name: 'ＷＯＭＥＮ　ソフトジャージジャケット（柄）', price: '3,990', rating: '100', thumb: '2.jpg', imgs: 6 }
				]},
				{ name: 'fleece', jp: 'フリース', items: [
					{ name: 'ＷＯＭＥＮ　プリントフリースフルジップパーカ（長袖）Ａ', price: '1,990', rating: '80', thumb: '2.jpg', imgs: 8 },
					{ name: 'ＷＯＭＥＮ　プリントフリースフルジップパーカ（長袖）Ｂ', price: '1,990', rating: '98', thumb: '2.jpg', imgs: 8 },
					{ name: 'ＷＯＭＥＮ　プリントフリースフルジップパーカ（長袖）Ｃ', price: '1,990', rating: '90', thumb: '2.jpg', imgs: 8 }
				]}				
			]}
		]},
		{ name: 'men', slides: 8, collections: [
			{ name: 'outer', jp: 'アウター', collections: [
				{ name: 'down', jp: 'ダウン', items: [
					{ name: 'ＭＥＮ　エアテックダウンコート', price: '12,900', rating: '90', thumb: '2.jpg', imgs: 9 },
					{ name: 'ＭＥＮ　ウルトラライトダウンコート', price: '6,990', rating: '85', thumb: '3.jpg', imgs: 8 },
					{ name: 'ＭＥＮ　ウルトラライトダウンハーフコート', price: '6,990', rating: '90', thumb: '3.jpg', imgs: 7 }
				]},
				{ name: 'coat', jp: 'コート', items: [
					{ name: 'ＭＥＮ　エアテックダウンコート', price: '12,900', rating: '90', thumb: '2.jpg', imgs: 9 },
					{ name: 'ＭＥＮ　ダウン４ＷＡＹコート', price: '12,900', rating: '80', thumb: '5.jpg', imgs: 9 },
					{ name: 'ＭＥＮ　ウルトラライトダウンコート', price: '6,990', rating: '85', thumb: '3.jpg', imgs: 8 }
				]},
				{ name: 'jacket', jp: 'ジャケット', items: [
					{ name: 'ＭＥＮ　ウールカシミヤジャケット（スリム）＋Ｅ', price: '7,990', rating: '95', thumb: '2.jpg', imgs: 7 },
					{ name: 'ＭＥＮ　ウールカシミヤジャケット＋Ｅ', price: '5,990', rating: '80', thumb: '2.jpg', imgs: 8 },
					{ name: 'ＭＥＮ　ウールブレンドジャージージャケット＋', price: '5,990', rating: '80', thumb: '2.jpg', imgs: 7 }
				]}
			]}
		]},
		{ name: 'kids', slides: 7, collections: [
			{ name: 'tops', jp: 'GIRLSトップス', collections: [
				{ name: 'outer', jp: 'GIRLS アウター・ジャケット', items: [
					{ name: 'ＫＩＤＳ　ウォームパデットジャケット', price: '3,990', rating: '100', thumb: '1.jpg', imgs: 6 },
					{ name: 'ＧＩＲＬＳ　ウォームパデットコート（スター）', price: '3,990', rating: '90', thumb: '1.jpg', imgs: 6 },
					{ name: 'ＧＩＲＬＳ　ウォームパデットコート', price: '3,990', rating: '95', thumb: '1.jpg', imgs: 6 }
				]},
				{ name: 'fleece', jp: 'GIRLSフリース', items: [
					{ name: 'ＧＩＲＬＳ　マイクロフリースプリントハイネックＴ（長袖）Ｂ', price: '790', rating: '98', thumb: '1.jpg', imgs: 3 },
					{ name: 'ＧＩＲＬＳ　ファーリーフリースジャケット（長袖）', price: '990', rating: '100', thumb: '1.jpg', imgs: 5 },
					{ name: 'ＧＩＲＬＳ　フリースフルジップジャケット（長袖）＋', price: '990', rating: '100', thumb: '1.jpg', imgs: 4 }
				]},
				{ name: 'tops', jp: 'GIRLSトップス', items: [
					{ name: 'ＧＩＲＬＳ　ボアスウェットフルジップパーカ（長袖）', price: '1,990', rating: '95', thumb: '1.jpg', imgs: 4 },
					{ name: 'ＫＩＤＳ　ボアスウェットフルジップパーカ（長袖）', price: '1,990', rating: '80', thumb: '1.jpg', imgs: 5 },
					{ name: 'ＧＩＲＬＳ　スウェットフルジップパーカ（長袖）', price: '2,290', rating: '80', thumb: '1.jpg', imgs: 1 }
				]}
			]}
		]},
		{ name: 'baby', slides: 6, collections: [
			{ name: 'infants', jp: 'BABY 乳幼児', collections: [
				{ name: 'tops', jp: 'トップス・ボトムス', items: [
					{ name: 'ＢＡＢＹ　ウォームイージーパンツ', price: '1,500', rating: '70', thumb: '1.jpg', imgs: 4 },
					{ name: 'ＢＡＢＹ　カットソーパンツ（カラー）', price: '1,500', rating: '80', thumb: '1.jpg', imgs: 5 },
					{ name: 'ＢＡＢＹ　カットソーパンツ（スウェット）＋', price: '1,500', rating: '80', thumb: '1.jpg', imgs: 1 }
				]},
				{ name: 'inner', jp: 'ルーム・インナー', items: [
					{ name: 'ＢＡＢＹ　ムーミンキルトパジャマ（長袖）Ａ１２・２４・６７', price: '1,500', rating: '75', thumb: '1.jpg', imgs: 3 },
					{ name: 'ＢＡＢＹ　ムーミンキルトパジャマ（長袖）Ｂ１１・４３・６３', price: '1,500', rating: '96', thumb: '1.jpg', imgs: 3 },
					{ name: 'ＢＡＢＹ　キルトパジャマ（クルマ・長袖）', price: '1,500', rating: '100', thumb: '1.jpg', imgs: 8 }
				]},
				{ name: 'shirts', jp: 'UT（プリントTシャツ）', items: [
					{ name: 'ＢＡＢＹ　リサ・ラーソンスウェットシャツ（長袖）Ａ１５', price: '1,500', rating: '100', thumb: '1.jpg', imgs: 1 },
					{ name: 'ＢＡＢＹ　リサ・ラーソンスウェットシャツ（長袖）Ｂ６９', price: '1,500', rating: '80', thumb: '1.jpg', imgs: 1 },
					{ name: 'ＢＡＢＹ　リサ・ラーソンスウェットシャツ（長袖）Ｄ１２', price: '1,500', rating: '80', thumb: '1.jpg', imgs: 1 }
				]}
			]}
		]}
	]
}

seed.categories.forEach(function(_category) {
	var slides = [];
	for (var i = 1; i <= _category.slides; i++) { slides.push('img/'+_category.name+'/slides/'+i+'.jpg'); }
	Category.create({
		name: _category.name,
		slides: slides
	}, function(error, category) {
		_category.collections.forEach(function(_subCollection) {
			Collection.create({
				name: _subCollection.name,
				jp: _subCollection.jp
			}, function(error, subCollection) {
				category.collections.push(subCollection._id);
				category.save();
				_subCollection.collections.forEach(function(_collection) {
					Collection.create({
						name: _collection.name,
						jp: _collection.jp,
						splash: 'img/'+_category.name+'/'+_subCollection.name+'/'+_collection.name+'/splash.jpg'
					}, function(error, collection) {
						subCollection.collections.push(collection._id);
						subCollection.save();
						_collection.items.forEach(function(_item, index) {
							var imgs = [];
							for (var i = 1; i <= _item.imgs; i++) { imgs.push('img/'+_category.name+'/'+_subCollection.name+'/'+_collection.name+'/'+(index+1)+'/'+i+'.jpg'); }
							Item.create({
								name: _item.name,
								price: _item.price,
								rating: _item.rating,
								thumb: 'img/'+_category.name+'/'+_subCollection.name+'/'+_collection.name+'/'+(index+1)+'/'+_item.thumb,
								imgs: imgs
							}, function(error, item) {
								if (index === 1) collection.thumb = item.thumb;
								collection.items.push(item._id);
								collection.save();
							});
						});
					});
				});
			});
		});
	});
});