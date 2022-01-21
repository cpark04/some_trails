class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: {error: "Invalid Credentials"}
    end
  end

  def destroy        
    if current_user
      logout!
      render json: {}
    else
      render json: {error: "Not logged in", status: 404} 
    end
  end

end