class Issue < ActiveRecord::Base
	has_many :essays
	validates :title, presence: true, length: { maximum: 500 }
	has_attached_file :issue_file, :url => "/scan/:basename.:extension"
	validates_attachment_content_type :issue_file, content_type: ['application/pdf']
	validates_with AttachmentSizeValidator, attributes: :issue_file, less_than: 20.megabytes

end
