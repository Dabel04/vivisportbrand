import React from 'react'

function Inventory() {
  return (
    <>
         <nav className="sidebar">
        <a href="admin-dashboard.html" className="sidebar-brand">44:11<span style="color:var(--primary-red)">.</span></a>
        <div className="nav-links">
            <a href="admin-dashboard.html" className="nav-item"><i className="bi bi-grid-1x2-fill"></i> Command Center</a>
            <a href="inventory.html" className="nav-item active"><i className="bi bi-stack"></i> Inventory</a>
            <a href="#" className="nav-item"><i className="bi bi-lightning-fill"></i> Logistics</a>
            <a href="#" className="nav-item"><i className="bi bi-person-badge-fill"></i> The Roster</a>
        </div>
    </nav>

    <main className="main-content">
        <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h1 className="page-title mb-0">Asset Inventory</h1>
                <p className="text-secondary small fw-bold">Manage and deploy performance gear</p>
            </div>
            <button className="btn btn-black" data-bs-toggle="modal" data-bs-target="#addGearModal">
                <i className="bi bi-plus-lg me-2"></i> Deploy New Gear
            </button>
        </div>

        <div id="inventoryList" className="row g-4">
            <div className="col-12 text-center p-5 text-secondary border rounded-4 bg-white">
                <div className="spinner-border text-danger mb-3" role="status"></div>
                <p className="small fw-bold text-uppercase">Syncing with Mainframe...</p>
            </div>
        </div>
    </main>

    <div className="modal fade" id="addGearModal" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg" style="border-radius: 20px;">
                <div className="modal-header border-0 p-4 pb-0">
                    <h5 className="modal-title fw-black italic text-uppercase">Deploy New Asset</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body p-4">
                    <form id="gearForm">
                        <div className="row g-4">
                            <div className="col-md-5">
                                <label className="fw-bold small text-uppercase mb-2 d-block">Visual Assets (Drop Multiple)</label>
                                <div className="drop-zone" id="dropZone" onclick="document.getElementById('fileInput').click()">
                                    <div id="dropContent" className="text-center">
                                        <i className="bi bi-images fs-1 text-navy"></i>
                                        <span className="fw-bold small d-block mt-2">CLICK OR DRAG IMAGES</span>
                                        <small className="opacity-50">Upload 1-10 photos</small>
                                    </div>
                                    <div id="previewTray"></div>
                                    <input type="file" id="fileInput" hidden accept="image/*" multiple/>
                                </div>
                                <button type="button" className="btn btn-link btn-sm text-danger text-decoration-none fw-bold mt-2 p-0" id="clearBtn" style="display:none" onclick="resetImages()">
                                    <i className="bi bi-x-circle me-1"></i> RESET IMAGES
                                </button>
                            </div>
                        
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="fw-bold small text-uppercase mb-2 d-block">Asset Name</label>
                                    <input type="text" id="productName" className="form-control fw-bold py-2" placeholder="e.g. THERMO-SHIELD JACKET" required/>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold small text-uppercase mb-2 d-block">Category</label>
                                    <select id="productCategory" className="form-select fw-bold py-2">
                                        <option value="General">Select Category...</option>
                                        <option value="Tops">Tops / Upper Body</option>
                                        <option value="Bottoms">Bottoms / Leggings</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Sets">Full Sets</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold small text-uppercase mb-2 d-block">Description</label>
                                    <textarea id="productDescription" className="form-control fw-bold" rows="3" placeholder="Brief product details..."></textarea>
                                </div>

                                <div className="row g-3">
                                    <div className="col-6">
                                        <label className="fw-bold small text-uppercase mb-2 d-block">Unit Price ($)</label>
                                        <input type="number" id="productPrice" className="form-control fw-bold font-mono py-2" placeholder="0.00" step="0.01"/>
                                    </div>
                                    <div className="col-6">
                                        <label className="fw-bold small text-uppercase mb-2 d-block">Batch Quantity</label>
                                        <input type="number" id="productStock" className="form-control fw-bold py-2" placeholder="100"/>
                                    </div>
                                </div>
                                
                                <input type="hidden" id="selectedSize" value="M"/>
                                <input type="hidden" id="selectedColor" value="Black"/>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="fw-bold small text-uppercase mb-3 d-block">Size Matrix</label>
                                        <div className="d-flex flex-wrap gap-2">
                                            <div className="size-btn">XS</div><div className="size-btn">S</div>
                                            <div className="size-btn active">M</div><div className="size-btn">L</div>
                                            <div className="size-btn">XL</div><div className="size-btn">XXL</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="fw-bold small text-uppercase mb-3 d-block">Colorways</label>
                                        <div className="d-flex align-items-center">
                                            <span className="color-dot active" style="background: #000;"></span>
                                            <span className="color-dot" style="background: #fff; border: 1px solid #ddd;"></span>
                                            <span className="color-dot" style="background: #d7263d;"></span>
                                            <span className="color-dot" style="background: #02182b;"></span>
                                            <span className="color-dot" style="background: #6c757d;"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer border-0 p-4 pt-0">
                    <button type="button" className="btn btn-light fw-bold" data-bs-dismiss="modal">ABORT</button>
                    <button type="button" id="confirmDeployBtn" className="btn btn-black px-5">CONFIRM DEPLOYMENT</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Inventory