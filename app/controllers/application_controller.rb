class ApplicationController < ActionController::Base
  before_action :authenticate_user!, except:[:home,]
  protect_from_forgery with: :null_session


  private
  def after_sign_in_path_for(_resource)
    root_path
  end

  def after_sign_out_path_for(resource)
    new_user_session_path
  end
end
