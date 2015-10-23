class PublicationsController < ApplicationController

  def index
  	@issues = Issue.order(created_at: :asc)
  end

end
