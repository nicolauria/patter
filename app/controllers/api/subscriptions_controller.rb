class Api::SubscriptionsController < ApplicationController

  def create
    # this is a comment
    # this is another comment
    # debugger
    sub = Subscription.create(user_id: current_user.id,
      channel_id: params[:channelId])
    @channel = Channel.find(sub.channel_id)
    render "api/channels/show"
  end
end
