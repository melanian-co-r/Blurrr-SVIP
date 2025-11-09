// blurrr_svip.js - FAKE APPLE RECEIPT - UNLOCKS SVIP FOREVER
$done({
  status: "HTTP/1.1 200 OK",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    "status": 0,
    "environment": "Production",
    "receipt": {"in_app": [{
      "product_id": "com.pinguo.msgAries.svip.year",
      "transaction_id": "1000000000000000",
      "original_transaction_id": "1000000000000000",
      "purchase_date_ms": "1735689600000",
      "expires_date_ms": "4102444800000",
      "is_trial_period": false
    }]},
    "latest_receipt_info": [{
      "product_id": "com.pinguo.msgAries.svip.year",
      "expires_date_ms": "4102444800000",
      "expires_date": "2099-12-31 23:59:59 Etc/GMT"
    }],
    "pending_renewal_info": [{"auto_renew_status": 1}]
  })
});
