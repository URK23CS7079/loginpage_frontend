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
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [hoveredSocialButton, setHoveredSocialButton] = useState(null);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at bottom right, rgba(121, 74, 255, 0.2), transparent), linear-gradient(to right bottom, rgba(79, 209, 197, 0.2), rgba(168, 85, 247, 0.3)), linear-gradient(to right top, #EEF2FF, #F5F3FF)',
      fontFamily: '"Poppins", "Segoe UI", Arial, sans-serif',
      padding: '20px 0',
      boxSizing: 'border-box',
      color: '#1F2937'
    }}>
      {/* CSS Animation for spinner */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { background-position: -468px 0; }
            100% { background-position: 468px 0; }
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
            100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <div style={{
        width: '100%',
        maxWidth: '360px', // Decreased from 440px
        padding: '32px', // Decreased from 40px
        margin: '0 15px',
        backgroundColor: '#ffffff',
        borderRadius: '20px', // Slightly reduced from 24px
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(99, 102, 241, 0.08)',
        animation: 'fadeIn 0.6s ease-out',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: '1',
          textAlign: 'center',
          marginBottom: '28px' // Slightly reduced from 35px
        }}>
          <h2 style={{
            fontSize: '28px', // Decreased from 32px
            fontWeight: '700',
            color: '#1F2937',
            marginBottom: '10px', // Decreased from 12px
            letterSpacing: '-0.5px'
          }}>Welcome Back</h2>
          <p style={{
            fontSize: '15px', // Decreased from 16px
            color: '#6B7280',
            marginTop: '0',
            animation: 'float 3s ease-in-out infinite'
          }}>Please sign in to continue your journey</p>
        </div>

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px', // Decreased from 24px
          position: 'relative',
          zIndex: '1'
        }}>
          <div style={{
            position: 'relative',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '14px', // Decreased from 16px
              transform: 'translateY(-50%)',
              color: isFocusedUsername ? '#6366F1' : '#9CA3AF',
              transition: 'color 0.3s ease'
            }}>
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
                width: '100%',
                padding: '14px 14px 14px 42px', // Decreased from 16px 16px 16px 48px
                fontSize: '14px', // Decreased from 15px
                border: '2px solid',
                borderColor: isFocusedUsername ? '#6366F1' : '#E5E7EB',
                borderRadius: '10px', // Decreased from 12px
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: isFocusedUsername ? '0 0 0 4px rgba(99, 102, 241, 0.1)' : 'none',
                fontFamily: 'inherit'
              }}
              placeholder="Username"
              required
            />
          </div>

          <div style={{
            position: 'relative',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '14px', // Decreased from 16px
              transform: 'translateY(-50%)',
              color: isFocusedPassword ? '#6366F1' : '#9CA3AF',
              transition: 'color 0.3s ease'
            }}>
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
                width: '100%',
                padding: '14px 42px 14px 42px', // Decreased from 16px 48px 16px 48px
                fontSize: '14px', // Decreased from 15px
                border: '2px solid',
                borderColor: isFocusedPassword ? '#6366F1' : '#E5E7EB',
                borderRadius: '10px', // Decreased from 12px
                backgroundColor: 'rgba(249, 250, 251, 0.8)',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: isFocusedPassword ? '0 0 0 4px rgba(99, 102, 241, 0.1)' : 'none',
                fontFamily: 'inherit'
              }}
              placeholder="Password"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                top: '50%',
                right: '14px', // Decreased from 16px
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#9CA3AF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6366F1'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
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

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2px' // Decreased from 4px
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px' // Decreased from 10px
            }}>
              <div style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  style={{
                    appearance: 'none',
                    width: '16px', // Decreased from 18px
                    height: '16px', // Decreased from 18px
                    border: '2px solid #D1D5DB',
                    borderRadius: '4px', // Decreased from 5px
                    outline: 'none',
                    cursor: 'pointer',
                    marginRight: '6px', // Decreased from 8px
                    position: 'relative',
                    transition: 'all 0.2s',
                    backgroundColor: 'white'
                  }}
                  onChange={(e) => {
                    if (e.target.checked) {
                      e.target.style.backgroundColor = '#6366F1';
                      e.target.style.borderColor = '#6366F1';
                    } else {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.borderColor = '#D1D5DB';
                    }
                  }}
                />
                <svg 
                  style={{
                    position: 'absolute',
                    left: '3px',
                    top: '3px',
                    pointerEvents: 'none',
                    visibility: 'hidden'
                  }}
                  width="10" // Decreased from 12
                  height="10" // Decreased from 12
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  onClick={(e) => {
                    const checkbox = document.getElementById('remember-me');
                    checkbox.checked = !checkbox.checked;
                    if (checkbox.checked) {
                      checkbox.style.backgroundColor = '#6366F1';
                      checkbox.style.borderColor = '#6366F1';
                      e.currentTarget.style.visibility = 'visible';
                    } else {
                      checkbox.style.backgroundColor = 'white';
                      checkbox.style.borderColor = '#D1D5DB';
                      e.currentTarget.style.visibility = 'hidden';
                    }
                  }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <label htmlFor="remember-me" style={{
                  fontSize: '13px', // Decreased from 14px
                  fontWeight: '500',
                  color: '#4B5563',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}>
                  Remember me
                </label>
              </div>
            </div>
            <button 
              type="button" 
              style={{
                background: 'none',
                border: 'none',
                fontSize: '13px', // Decreased from 14px
                fontWeight: '500',
                color: '#6366F1',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s, transform 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4F46E5';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6366F1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => alert("Forgot password functionality would go here")}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '14px', // Decreased from 16px
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '15px', // Decreased from 16px
              fontWeight: '600',
              color: 'white',
              background: isButtonHovered 
                ? 'linear-gradient(135deg, #4F46E5, #7E3AF2)' 
                : 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              border: 'none',
              borderRadius: '10px', // Decreased from 12px
              cursor: isLoading ? 'default' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: isButtonHovered 
                ? '0 6px 16px rgba(99, 102, 241, 0.3), 0 2px 5px rgba(99, 102, 241, 0.2)' // Decreased shadow
                : '0 4px 10px rgba(99, 102, 241, 0.2)', // Decreased shadow
              marginTop: '14px', // Decreased from 16px
              animation: isButtonHovered ? 'pulse 1.5s infinite' : 'none',
              fontFamily: 'inherit'
            }}
            onMouseEnter={() => !isLoading && setIsButtonHovered(true)}
            onMouseLeave={() => !isLoading && setIsButtonHovered(false)}
          >
            {isLoading ? (
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px' // Decreased from 12px
              }}>
                <svg 
                  style={{
                    animation: 'spin 1s linear infinite',
                    width: '18px', // Decreased from 20px
                    height: '18px' // Decreased from 20px
                  }} 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="none" 
                    opacity="0.25"
                  />
                  <path 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
                    opacity="0.75"
                  />
                </svg>
                <span>Signing in...</span>
              </span>
            ) : "Sign In"}
          </button>
        </form>

        {message && (
          <div 
            style={{
              padding: '14px', // Decreased from 16px
              marginTop: '20px', // Decreased from 24px
              borderRadius: '10px', // Decreased from 12px
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '14px', // Decreased from 15px
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px', // Decreased from 8px
              animation: 'fadeIn 0.5s ease-out',
              backgroundColor: isSuccess ? 'rgba(220, 252, 231, 0.8)' : 'rgba(254, 226, 226, 0.8)',
              color: isSuccess ? '#065F46' : '#991B1B',
              border: `1px solid ${isSuccess ? '#A7F3D0' : '#FECACA'}`
            }}
          >
            {isSuccess ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            )}
            {message}
          </div>
        )}

        <div style={{
          marginTop: '28px', // Decreased from 32px
          textAlign: 'center',
          position: 'relative',
          zIndex: '1'
        }}>
          <span style={{
            fontSize: '14px', // Decreased from 15px
            color: '#4B5563'
          }}>
            Don't have an account?
          </span>
          <button 
            type="button"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '14px', // Decreased from 15px
              fontWeight: '600',
              color: '#6366F1',
              cursor: 'pointer',
              marginLeft: '5px', // Decreased from 6px
              transition: 'color 0.2s, transform 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6366F1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => alert("Sign up functionality would go here")}
          >
            Create account
          </button>
        </div>

        <div style={{
          position: 'relative',
          margin: '28px 0 20px', // Decreased from 32px 0 24px
          height: '1px',
          backgroundColor: '#E5E7EB',
          zIndex: '1'
        }}>
          <span style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '0 14px', // Decreased from 16px
            fontSize: '13px', // Decreased from 14px
            color: '#6B7280',
            fontWeight: '500'
          }}>Or continue with</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px', // Decreased from 16px
          marginTop: '6px', // Decreased from 8px
          position: 'relative',
          zIndex: '1'
        }}>
          {[
            { id: 'google', color: '#4285F4', svg: <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
            { id: 'facebook', color: '#1877F2', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> },
            { id: 'github', color: '#333', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="#333"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
          ].map(provider => (
            <button
              key={provider.id}
              type="button"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '48px', // Decreased from 56px
                height: '48px', // Decreased from 56px
                border: '1px solid #E5E7EB',
                borderRadius: '10px', // Decreased from 12px
                backgroundColor: hoveredSocialButton === provider.id ? '#F9FAFB' : 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: hoveredSocialButton === provider.id ? '0 4px 10px rgba(0, 0, 0, 0.05)' : 'none',
                transform: hoveredSocialButton === provider.id ? 'translateY(-2px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredSocialButton(provider.id)}
              onMouseLeave={() => setHoveredSocialButton(null)}
              onClick={() => alert(`${provider.id.charAt(0).toUpperCase() + provider.id.slice(1)} login would go here`)}
            >
              {provider.svg}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}