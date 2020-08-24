<template>
	<view>
		<text v-show="favoriteList.length==0">还没有收藏，快去收藏吧！！！</text>
		<view class="favorite_row" v-for="(f,i) in favoriteList" :key="i">
			<view class="favorite_pic">
				<image :src="server.host+f.pic" mode="widthFix"></image>
			</view>
			<view class="favorite_msg">
				<view class="favorite_title">
					课程名称:{{f.title}}
				</view>
				<view class="favorite_footer">	
					<view class="favorite_price">
						价格:{{f.price |currency}}
					</view>
					<view class="favorite_time">
						收藏时间:{{f.fTime | setTime}}
					</view>
				</view>
			</view>
			<view class="setting">
				<view class="del" :data-id="f.courseId" @click="remove">
					取消收藏
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				favoriteList: []
			};
		},
		onLoad(options) {
			uni.request({
				withCredentials: true,
				method: 'GET',
				url: this.server.favoriteList(),
				success: (res) => {
					console.log(res);
					this.favoriteList = res.data
				}
			})
		},
		methods:{
			remove(e){
				let cid=e.target.dataset.id;
				console.log(cid)
				uni.request({
					url:this.server.favoriteRemove(cid),
					withCredentials:true,
					success: (res) => {
						if(res.data.code==200){
							uni.showToast({
								title:'删除成功'
							})
							uni.request({
								withCredentials: true,
								method: 'GET',
								url: this.server.favoriteList(),
								success: (res) => {
									console.log(res);
									this.favoriteList = res.data
								}
							})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.favorite_row{
		display: flex;
		.favorite_pic{
			flex: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 100%;
			}
		}
		.favorite_msg{
			margin: 10rpx;
			flex: 4;
			.favorite_title{
				font-size: $uni-font-size-base;
			}
			.favorite_footer{
				.favorite_price{
					font-size: $uni-font-size-base;
				}
				.favorite_time{
					font-size: $uni-font-size-base;
				}
			}
		}
		.setting{
			flex: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			.del{
				font-size: $uni-font-size-sm;
				background-color: #ccc;
				width: 120rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				align-self: center;
				border-radius: 20rpx;
			}
			}
	}
</style>
