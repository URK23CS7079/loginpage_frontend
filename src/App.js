import React, { useState } from 'react';

export default function ModernLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://loginpagebackend-production.up.railway.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
      } else {
        setMessage('Login failed: ' + data.message);
      }
    } catch (error) {
      setMessage('Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  };

  const isSuccess = message.includes('successful');

  // Styles object
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #EEF2FF, #F5F3FF)',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      width: '100%',
      maxWidth: '420px',
      padding: '30px',
      margin: '0 15px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '8px'
    },
    subtitle: {
      fontSize: '14px',
      color: '#6B7280',
      marginTop: '8px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      top: '50%',
      left: '12px',
      transform: 'translateY(-50%)',
      color: '#9CA3AF'
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      fontSize: '14px',
      borderWidth: '0 0 2px 0',
      borderColor: '#D1D5DB',
      borderRadius: '8px',
      backgroundColor: 'rgba(249, 250, 251, 0.6)',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    inputFocus: {
      borderColor: '#6366F1'
    },
    eyeButton: {
      position: 'absolute',
      top: '50%',
      right: '12px',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#9CA3AF'
    },
    rememberForgot: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    checkboxInput: {
      accentColor: '#6366F1'
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#4B5563'
    },
    forgotButton: {
      background: 'none',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      color: '#6366F1',
      cursor: 'pointer'
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: '500',
      color: 'white',
      background: 'linear-gradient(to right, #6366F1, #8B5CF6)',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'opacity 0.2s'
    },
    submitButtonHover: {
      opacity: 0.9
    },
    spinnerContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    spinner: {
      marginRight: '8px',
      animation: 'spin 1s linear infinite',
    },
    message: {
      padding: '16px',
      marginTop: '24px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '500'
    },
    successMessage: {
      backgroundColor: '#DEF7EC',
      color: '#046C4E',
      border: '1px solid #BCF0DA'
    },
    errorMessage: {
      backgroundColor: '#FDE8E8',
      color: '#9B1C1C',
      border: '1px solid #F8B4B4'
    },
    signUpContainer: {
      marginTop: '30px',
      textAlign: 'center'
    },
    signUpText: {
      fontSize: '14px',
      color: '#4B5563'
    },
    signUpButton: {
      background: 'none',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      color: '#6366F1',
      cursor: 'pointer',
      marginLeft: '4px'
    },
    divider: {
      position: 'relative',
      marginTop: '30px',
      marginBottom: '20px',
      height: '1px',
      backgroundColor: '#E5E7EB'
    },
    dividerText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '0 10px',
      fontSize: '14px',
      color: '#6B7280'
    },
    socialButtons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      marginTop: '20px'
    },
    socialButton: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    socialButtonHover: {
      backgroundColor: '#F9FAFB'
    }
  };

  // Inline style for the spinner animation
  const spinnerStyle = document.createElement('style');
  spinnerStyle.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(spinnerStyle);

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [hoveredSocialButton, setHoveredSocialButton] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome</h2>
          <p style={styles.subtitle}>Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <div style={styles.inputIcon}>
              {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocusedUsername(true)}
              onBlur={() => setIsFocusedUsername(false)}
              style={{
                ...styles.input,
                ...(isFocusedUsername ? styles.inputFocus : {})
              }}
              placeholder="Username"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <div style={styles.inputIcon}>
              {/* Lock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              style={{
                ...styles.input,
                ...(isFocusedPassword ? styles.inputFocus : {})
              }}
              placeholder="Password"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          <div style={styles.rememberForgot}>
            <div style={styles.checkbox}>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                style={styles.checkboxInput}
              />
              <label htmlFor="remember-me" style={styles.checkboxLabel}>
                Remember me
              </label>
            </div>
            <button 
              type="button" 
              style={styles.forgotButton}
              onClick={() => alert("Forgot password functionality would go here")}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.submitButton,
              ...(isButtonHovered ? styles.submitButtonHover : {})
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {isLoading ? (
              <span style={styles.spinnerContainer}>
                <svg style={styles.spinner} width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"></path>
                </svg>
                Signing in...
              </span>
            ) : "Sign In"}
          </button>
        </form>

        {message && (
          <div 
            style={{
              ...styles.message,
              ...(isSuccess ? styles.successMessage : styles.errorMessage)
            }}
          >
            {message}
          </div>
        )}

        <div style={styles.signUpContainer}>
          <span style={styles.signUpText}>
            Don't have an account?
          </span>
          <button 
            type="button"
            style={styles.signUpButton}
            onClick={() => alert("Sign up functionality would go here")}
          >
            Sign up
          </button>
        </div>

        <div style={styles.divider}>
          <span style={styles.dividerText}>Or continue with</span>
        </div>

        <div style={styles.socialButtons}>
          <button
            type="button"
            style={{
              ...styles.socialButton,
              ...(hoveredSocialButton === 'google' ? styles.socialButtonHover : {})
            }}
            onMouseEnter={() => setHoveredSocialButton('google')}
            onMouseLeave={() => setHoveredSocialButton(null)}
            onClick={() => alert("Google login would go here")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>

          <button
            type="button"
            style={{
              ...styles.socialButton,
              ...(hoveredSocialButton === 'facebook' ? styles.socialButtonHover : {})
            }}
            onMouseEnter={() => setHoveredSocialButton('facebook')}
            onMouseLeave={() => setHoveredSocialButton(null)}
            onClick={() => alert("Facebook login would go here")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </button>

          <button
            type="button"
            style={{
              ...styles.socialButton,
              ...(hoveredSocialButton === 'github' ? styles.socialButtonHover : {})
            }}
            onMouseEnter={() => setHoveredSocialButton('github')}
            onMouseLeave={() => setHoveredSocialButton(null)}
            onClick={() => alert("GitHub login would go here")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#333">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}