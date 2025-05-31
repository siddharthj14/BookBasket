import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderNumber, setOrderNumber] = useState('');
  
  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'visa'
  });

  // Sample order data
  const orderData = {
    subtotal: 7696,
    shipping: 0,
    total: 7696
  };

  const handleShippingSubmit = () => {
    // Basic validation
    if (!shippingInfo.firstName || !shippingInfo.lastName || !shippingInfo.email || 
        !shippingInfo.phone || !shippingInfo.address || !shippingInfo.city || 
        !shippingInfo.state || !shippingInfo.zipCode) {
      alert('Please fill in all required fields');
      return;
    }
    setCurrentStep(2);
  };

  const handlePaymentSubmit = () => {
    // Basic validation
    if (!paymentInfo.cardholderName || !paymentInfo.cardNumber || 
        !paymentInfo.expiryDate || !paymentInfo.cvv) {
      alert('Please fill in all payment details');
      return;
    }
    const newOrderNumber = `ORD-${Date.now()}`;
    setOrderNumber(newOrderNumber);
    setCurrentStep(3);
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value.replace(/\D/g, ''));
    if (formatted.length <= 19) {
      setPaymentInfo({ ...paymentInfo, cardNumber: formatted });
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setPaymentInfo({ ...paymentInfo, expiryDate: value });
  };

  const StepIndicator = () => (
    <div className="step-indicator">
      <div className="step-container">
        {[1, 2, 3].map((step) => (
          <div key={step} className="step-item">
            <div className={`step-circle ${currentStep >= step ? 'active' : ''}`}>
              {step === 1 && <span className="step-icon">🚚</span>}
              {step === 2 && <span className="step-icon">💳</span>}
              {step === 3 && <span className="step-icon">✅</span>}
            </div>
            {step < 3 && (
              <div className={`step-line ${currentStep > step ? 'active' : ''}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  if (currentStep === 1) {
    return (
      <div className="checkout-container">
        <div className="checkout-wrapper">
          <StepIndicator />
          
          <div className="checkout-card">
            <h2 className="checkout-title">
              <span className="title-icon">📍</span>
              Shipping Information
            </h2>
            
            <div className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <div className="input-container">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      className="form-input"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <div className="input-container">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      className="form-input"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <div className="input-container">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    className="form-input"
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <div className="input-container">
                  <span className="input-icon">📞</span>
                  <input
                    type="tel"
                    className="form-input"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Address *</label>
                <textarea
                  rows="3"
                  className="form-textarea"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">ZIP Code *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={shippingInfo.zipCode}
                    onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Country</label>
                <select
                  className="form-select"
                  value={shippingInfo.country}
                  onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleShippingSubmit}
                className="btn btn-primary btn-full"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="checkout-container">
        <div className="checkout-wrapper">
          <StepIndicator />
          
          <div className="checkout-card">
            <h2 className="checkout-title">
              <span className="title-icon">💳</span>
              Payment Method
            </h2>
            
            <div className="form-container">
              <div className="payment-methods">
                {[
                  { id: 'visa', label: 'VISA', class: 'visa' },
                  { id: 'mastercard', label: 'MC', class: 'mastercard' },
                  { id: 'amex', label: 'AMEX', class: 'amex' },
                  { id: 'discover', label: 'DISC', class: 'discover' }
                ].map((method) => (
                  <label key={method.id} className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      className="payment-radio"
                      checked={paymentInfo.paymentMethod === method.id}
                      onChange={(e) => setPaymentInfo({...paymentInfo, paymentMethod: e.target.value})}
                    />
                    <div className={`payment-card ${method.class} ${paymentInfo.paymentMethod === method.id ? 'selected' : ''}`}>
                      {method.label}
                    </div>
                  </label>
                ))}
              </div>
              
              <p className="payment-subtitle">Credit or Debit Card</p>

              <div className="form-group">
                <label className="form-label">Cardholder Name *</label>
                <div className="input-container">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                    value={paymentInfo.cardholderName}
                    onChange={(e) => setPaymentInfo({...paymentInfo, cardholderName: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Card Number *</label>
                <div className="input-container">
                  <span className="input-icon">💳</span>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="form-input"
                    value={paymentInfo.cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Expiry Date *</label>
                  <div className="input-container">
                    <span className="input-icon">📅</span>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength="5"
                      className="form-input"
                      value={paymentInfo.expiryDate}
                      onChange={handleExpiryChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">CVV *</label>
                  <div className="input-container">
                    <span className="input-icon">🔒</span>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength="4"
                      className="form-input"
                      value={paymentInfo.cvv}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/\D/g, '')})}
                    />
                  </div>
                </div>
              </div>

              <div className="button-row">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="btn btn-secondary btn-half"
                >
                  Back to Shipping
                </button>
                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  className="btn btn-primary btn-half"
                >
                  Complete Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="checkout-container">
        <div className="checkout-wrapper">
          <StepIndicator />
          
          <div className="checkout-card confirmation-card">
            <div className="confirmation-header">
              <div className="success-icon">✅</div>
              <h2 className="confirmation-title">Order Confirmed!</h2>
              <p className="confirmation-subtitle">Thank you for your purchase. Your order has been confirmed and will be shipped soon.</p>
            </div>

            <div className="order-details">
              <h3 className="order-number-title">Order Number</h3>
              <p className="order-number">{orderNumber}</p>
              
              <div className="order-summary">
                <h4 className="summary-title">Order Summary</h4>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{orderData.subtotal}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr className="summary-divider" />
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₹{orderData.total}</span>
                </div>
              </div>
            </div>

            <div className="delivery-info">
              <h4 className="delivery-title">
                <span className="delivery-icon">🚚</span>
                Delivery Information
              </h4>
              <p className="delivery-text">
                Estimated delivery: <span className="delivery-date">Sunday, June 8, 2025</span>
              </p>
              <p className="delivery-text">
                Order confirmation sent to: <span className="delivery-email">{shippingInfo.email || 'siddharthj1405@gmail.com'}</span>
              </p>
              <p className="delivery-text">
                Track your order with: <span className="tracking-number">{orderNumber}</span>
              </p>
            </div>

            <div className="confirmation-actions">
              <button
                onClick={() => setCurrentStep(1)}
                className="btn btn-primary"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert('Tracking feature coming soon!')}
                className="btn btn-secondary"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Checkout;