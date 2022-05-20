<?php $__env->startSection('content'); ?>

<section class="w3-padding">

    <ul id="dashboard">
        <li><a href="/console/projects/list">Manage Projects</a></li>
        <li><a href="/console/links/list">Manage Links</a></li>
        <li><a href="/console/types/list">Manage Types</a></li>
        <li><a href="/console/certifications/list">Manage Certifications</a></li>
        <li><a href="/console/users/list">Manage Users</a></li>
        <li><a href="/console/logout">Log Out</a></li>
    </ul>

</section>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.console', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/stefanwhittakerlee/Documents/Web_Development_Work/PHP/PortfolioFinal/portfolio/resources/views/console/dashboard.blade.php ENDPATH**/ ?>