;; The MIT License (MIT)
;; Copyright (c) 2025 Tashfeen <tashfeen.org>

;; Permission is hereby granted, free of charge, to any person
;; obtaining a copy of this software and associated documentation
;; files (the “Software”), to deal in the Software without
;; restriction, including without limitation the rights to use, copy,
;; modify, merge, publish, distribute, sublicense, and/or sell copies
;; of the Software, and to permit persons to whom the Software is
;; furnished to do so, subject to the following conditions:

;; The above copyright notice and this permission notice shall be
;; included in all copies or substantial portions of the Software.

;; THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
;; EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
;; MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
;; NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
;; BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
;; ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
;; CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
;; SOFTWARE.

;; This is my small "terminal" Emacs config I pull on servers.

(load-theme 'modus-vivendi-tinted t)

(cua-mode t)
(menu-bar-mode -1)
(tool-bar-mode -1)
(show-paren-mode 1)
(scroll-bar-mode -1)
(global-hl-line-mode t)
(global-display-line-numbers-mode t)

(setq
  inhibit-startup-message t
  inhibit-startup-screen t
  ring-bell-function 'ignore
  make-backup-files nil
  auto-save-default nil
  visible-bell t)
(setq-default tab-width 4 fill-column 70)
(setq inhibit-startup-echo-area-message "tfn")
(dolist
  (binding
    '(("C-s" . save-buffer)
       ("C-/" . comment-line)
       ("C-o" . other-window)
       ("C-f" . isearch-forward)))
  (global-set-key (kbd (car binding)) (cdr binding)))

