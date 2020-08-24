<template>
	<view>
		<view class="cart_row" v-for="(v,i) in CartList" :key="i">
			<view class="cartList_pic">
				<image :src="server.host+v.pic" mode="widthFix"></image>
			</view>
			<view class="cartList_word">
				<view class="title">
					课程名称：{{v.title}}
				</view>
				<view class="price">
					价格：￥{{v.price}}
				</view>
			</view>
		</view>
		<view class="bottom-box">
			<uni-goods-nav :fill="true" :options="goodsNavOptions" :button-group="goodsNavButtonGroup" @click="doOptionClick" @buttonClick="doButtonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CartList:[]
			}
		},
		onLoad(options){
			uni.request({
				url:this.server.CartList(),
				method:'GET',
				withCredentials:true,
				success: (res) => {
					console.log(res);
					this.CartList=res.data;
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.cart_row{
		display: flex;
		margin: 10rpx;
		.cartList_pic{
			flex: 2;
			image{
				width: 100%;
			}
		}
		.cartList_word{
			flex: 4;
			display: flex;
			flex-direction: column;
			padding: 10rpx;
			justify-content: space-between;
			.title {
				font-size: $uni-font-size-base;
			}
			.price{
				font-size: $uni-font-size-base;
			}
		}
	}
	.bottom-box {		//固定定位于底部的商品导航条
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
