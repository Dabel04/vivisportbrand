import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/dashboard.css'

function Dashboard() {
  return (
    <>
    <nav className="sidebar">
        <Link to="/admin/dashboard" className="sidebar-brand">44:11<span style={{color: "var(--primary-red)"}}>.</span></Link>
        
        <div className="nav-links">
            <Link to="/admin/dashboard" className="nav-item active">
                <i className="bi bi-grid-1x2-fill"></i> Command Center
            </Link>
            <Link to="/admin/inventory" className="nav-item">
                <i className="bi bi-stack"></i> Inventory
            </Link>
            <a href="#" className="nav-item">
                <i className="bi bi-lightning-fill"></i> Logistics
            </a>
            <a href="#" className="nav-item">
                <i className="bi bi-person-badge-fill"></i> The Roster
            </a>
        </div>

        <div className="mt-auto">
            <div className="p-3 rounded-3" style={{background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)"}}>
                <div className="d-flex align-items-center mb-2">
                    <div className="bg-success rounded-circle me-2" style={{width: "8px", height: "8px"}}></div>
                    <small className="fw-bold text-uppercase opacity-50" style={{fontSize: "0.6rem"}}>Server: ACTIVE</small>
                </div>
                <p className="mb-0 fw-black italic small" id="liveClock">00:00:00</p>
            </div>
        </div>
    </nav>

    <main className="main-content">
        
        <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h1 className="page-title mb-0">Command Center</h1>
                <p className="text-secondary small fw-bold mt-1" id="systemStamp">INITIALIZING SYSTEM...</p>
            </div>
            <div className="d-flex gap-2">
                <button className="btn btn-outline-dark btn-sm fw-bold px-3" onclick="location.reload()">REFRESH</button>
                <button className="btn btn-action btn-sm" onclick="simulateSale()">SIMULATE ORDER</button>
            </div>
        </div>

        <div className="row g-4 mb-4">
            <div className="col-md-3">
                <div className="section-card stat-box highlight">
                    <div className="stat-label">Net Revenue (24H)</div>
                    <div className="stat-value" id="dash-revenue">$4,820.00</div>
                    <div className="mt-2 small fw-bold text-success font-mono">+12.4% ↑</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="section-card stat-box">
                    <div className="stat-label">Active Logistics</div>
                    <div className="stat-Value" id="dash-orders">24</div>
                    <div className="mt-2 small fw-bold text-secondary font-mono">3 DELAYS</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="section-card stat-box">
                    <div className="stat-label">Conv. Rate</div>
                    <div className="stat-value">3.2%</div>
                    <div className="mt-2 small fw-bold text-danger font-mono">-0.4% ↓</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="section-card stat-box">
                    <div className="stat-label">Live Roster</div>
                    <div className="stat-value">842</div>
                    <div className="mt-2 small fw-bold text-success font-mono">12 NEW TODAY</div>
                </div>
            </div>
        </div>

        <div className="row g-4">
            <div className="col-lg-8">
                <div className="section-card">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <h6 className="fw-black italic text-uppercase small">Revenue Velocity Cycles</h6>
                        <span className="badge bg-light text-dark font-mono">LIVE_FEED</span>
                    </div>
                    <canvas id="revenueChart" style={{maxHeight: "300px"}}></canvas>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="section-card">
                    <h6 className="fw-black italic text-uppercase small mb-4">The Podium // Top Gear</h6>
                    <div id="podiumList">
                        <div className="podium-item">
                            <div className="podium-rank">01</div>
                            <div className="flex-grow-1">
                                <div className="podium-name">Alpha Velocity Tights</div>
                                <div className="podium-meta">142 UNITS // $12,070 REV</div>
                            </div>
                            <i className="bi bi-graph-up-arrow text-success"></i>
                        </div>
                        <div className="podium-item">
                            <div className="podium-rank">02</div>
                            <div className="flex-grow-1">
                                <div className="podium-name">Elite Speed Runner</div>
                                <div className="podium-meta">110 UNITS // $17,600 REV</div>
                            </div>
                            <i className="bi bi-graph-up-arrow text-success"></i>
                        </div>
                    </div>
                    <a href="inventory.html" className="btn btn-light btn-sm w-100 mt-3 fw-bold py-2">MANAGE INVENTORY</a>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="section-card">
                    <h6 className="fw-black italic text-uppercase small mb-4">Performance Feed</h6>
                    <div className="activity-feed" id="activityFeed">
                        <div className="activity-item urgent">
                            <p className="activity-text mb-0">System Check: Inventory node synced</p>
                            <span className="activity-time">JUST NOW</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="section-card">
                            <h6 className="fw-black italic text-uppercase small mb-4">Conversion Funnel</h6>
                            <div className="funnel-step" style={{width: "100%"}}>SESSIONS (12,402)</div>
                            <div className="funnel-step" style={{width: "75%"}}>ADD TO CART (3,105)</div>
                            <div className="funnel-step" style={{width: "45%"}}>CHECKOUT (840)</div>
                            <div className="funnel-step" style={{width: "25%", background: "var(--primary-red)"}}>PURCHASE (392)</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section-card" style={{background: "var(--primary-navy)", color: "white"}}>
                            <h6 className="fw-black italic text-uppercase small mb-4" style={{color: "var(--primary-red)"}}>Critical Alerts</h6>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-exclamation-triangle-fill text-warning me-3 fs-4"></i>
                                <div>
                                    <p className="mb-0 fw-bold small">3 Pending Refunds</p>
                                    <small className="opacity-50 font-mono">NEEDS ATTENTION</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-truck text-info me-3 fs-4"></i>
                                <div>
                                    <p className="mb-0 fw-bold small">12 Logistics Delays</p>
                                    <small className="opacity-50 font-mono">OVER 24H SINCE ORDER</small>
                                </div>
                            </div>
                            <button className="btn btn-danger w-100 fw-bold small py-2 mt-2">RESOLVE ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    </>
  )
}

export default Dashboard