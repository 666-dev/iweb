<template>
	<view>
		<view class="school_row" v-for="(s,i) in schoolList" :key="i">
			<view class="position_img">
				<image src="../../static/images/iconlist.png" mode=""></image>
			</view>
			<view class="school_msg">
				<view class="school_sname">
					{{s.sname}}
				</view>
				<view class="school_phone">
					{{s.phone}}
				</view>
				<view class="school_postcode">
					{{s.postcode}}
				</view>
				<view class="school_address">
					{{s.address}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				schoolList: [],
			}
		},
		onLoad(option) {
			uni.request({
				withCredentials: true,
				url: this.server.schoolList(),
				success: res => {
					console.log(res.data)
					this.schoolList = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.school_row {
		display: flex;
		margin: 20rpx 0rpx;
		padding: 10rpx 0;
		border-bottom: 4rpx solid #ccc;
		.position_img {
			flex: 2;
			height: 180rpx;
			overflow: hidden;

			image {
				top: -540rpx;
				left: 164rpx;
				width: 100%;
				transform: scale(2.5, 4.5);
			}
		}

		.school_msg {
			flex: 6;
			margin: 10rpx;
			display: flex;
			flex-direction: column;
			.school_sname {
				font-size: $uni-font-size-lg;
			}
			.school_phone{
				font-size:$uni-font-size-base;
			}
			.school_postcode{
				font-size:$uni-font-size-base;
			}
			.school_address{
				font-size:$uni-font-size-base;
			}
		}
	}
</style>
