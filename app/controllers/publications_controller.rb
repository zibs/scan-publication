class PublicationsController < ApplicationController

  def index
  	@issues = Issue.order(created_at: :asc)
  end

  def download(issue)
    send_file issue.document.path, :type => 'application/pdf', :filename => issue.permalink
  end

end
