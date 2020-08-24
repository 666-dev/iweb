<template>
	<view>
		<view class="header">
			<view class="title">讲师列表</view>
		</view>
		<view class="teacher_row" v-for="(t,i) in teacherList" :key="i">
			<view class="teacher_img">
				<image :src="server.host+t.tpic" mode="widthFix"></image>
			</view>
			<view class="teacher_msg">
				<view class="tname">
					{{t.tname}}
				</view>
				<view class="maincourse">
					{{t.maincourse}}
				</view>
				<view class="style">
					{{t.style}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			teacherList:[],
			}
		},
		onLoad(option){
			uni.request({
				withCredentials: true,
				url: this.server.teacherList(),
				success: res => {
					console.log(res.data)
					this.teacherList = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.header {
		display: flex;
		border-bottom: 1px solid $uni-border-color;

		.title {
			font-size: $uni-font-size-title;
			padding: 10rpx 35rpx;
			border-bottom: 1rpx solid $iweb-theme-color;
			transform: translateY(1rpx);
		}
	}
	.teacher_row{
		display: flex;
		.teacher_img{
			flex: 2;
			image{
				width: 100%;
			}
		}
		.teacher_msg{
			flex: 6;
			display: flex;
			flex-direction:column;
			align-content: space-around;
			.tname{
				margin: 8rpx;
				font-size: 32rpx;
			}
			.maincourse{
				margin: 8rpx;
				font-size: 32rpx;
			}
			.style{
				margin: 8rpx;
				font-size: 14rpx;
			}
		}
	}
</style>
