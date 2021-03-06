class User < ApplicationRecord
  validates :session_token, presence:true, uniqueness:true
  validates :password_digest, :fname, :lname, presence:true 
  validates :password, length:{minimum: 6}, allow_nil:true
  validates :email, format: { with: /\A[\w+-.]+@[a-z\d-]+(.[a-z\d-]+)*.[a-z]+\z/i, message: " is invalid"  }, uniqueness: { case_sensitive: false }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :reviews

  has_one_attached :pfp

  has_many :photos



  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else 
      return nil
    end 
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
