class Essay < ActiveRecord::Base
  belongs_to :issue
  validates :title,  presence: true,  length:  { maximum: 500 }
  validates :author, presence: true,  length:  { maximum: 300 }
end
