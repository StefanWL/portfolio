<?php $__env->startSection('content'); ?>

<section class="w3-padding">

    <h2>Manage Certifications</h2>

    <table class="w3-table w3-stripped w3-bordered w3-margin-bottom">
        <tr class="w3-red">
            <th></th>
            <th>Type</th>
            <th>Subject</th>
            <th>School</th>
            <th>Date</th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <?php $__currentLoopData = $certifications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $certification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td>
                </td>
                <td><?php echo e($certification->type); ?></td>
                <td><?php echo e($certification->subject); ?></td>
                <td><?php echo e($certification->school); ?></td>
                <td><?php echo e($certification->date); ?></td>
                <td></td>
                <td><a href="/console/certifications/edit/<?php echo e($certification->id); ?>">Edit</a></td>
                <td><a href="/console/certifications/delete/<?php echo e($certification->id); ?>">Delete</a></td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>

    <a href="/console/certifications/add" class="w3-button w3-green">New Certification</a>

</section>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.console', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/stefanwhittakerlee/Documents/Web_Development_Work/PHP/PortfolioFinal/portfolio/resources/views/certifications/list.blade.php ENDPATH**/ ?>